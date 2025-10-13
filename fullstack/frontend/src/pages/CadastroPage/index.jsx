// frontend\src\pages\CadastroPage\index.jsx
import '.style.css';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {toast} from 'react-toastify';
import api from '../../services/api';
import {useForm} from 'react-hook-form';
const esquemaDeCadastro = yup.object().shape( {
    nome: yup.string()
    .min (3, 'O nome deve ter pelo menos 3 caracteres')
    .required('O nome é obrigatório'),
    email: yup.string()
    .email('Digite um email válido')
    .required('O email é obrigatório'),
    
});

function CadastroPage() {
    const {
        register: registrarCampos,
        handleSubmit: manipularEnvio,
        formState: {errors: errosDeFormulario, isSubmitting: estaEnviando},
        setError: definirErroNoCampo,
        reset: limparFormulario
    } = useForm({
        resolver: yupResolver(esquemaDeCadastro),
        defaultValues: { nome: '', emai:'' }
    });
    async function enviarFormulario(dadosDoFormulario) {
        try {
            await api.post('/usuarios', dadosDoFormulario);
            toast.success('Usuário cadastrado com sucesso!');
            limparFormulario();
        } catch (error) {
            const codigoStatus = error.response?.status;
            const mensagemDeErro = error.response?.data?.message || '';

            if (codigoStatus === 400 && mensagemDeErro.toLowerCase().includes('Já cadastrado')) {
                definirErroNoCampo('email', { type: 'manual', message: 'Este email já está cadastrado.' });
            }

            toast.error('Erro ao cadastrar usuário. Por favor, tente novamente.');
            console.error('Erro ao cadastrar usuário:', error);
        }
    }
    return (
        <div className='cadastro-container'>
            <h1>Cadastro de Usuários</h1>
            <form noValidate onSubmit={lidarComEnvioDoFormulario(enviarFormulario)} >
                <div className='form-group'>
                    <label htmlFor='nome'>Nome:</label>
                    <input
                        id= "campo-nome"
                        type="text"
                        placeholder='Ex...: João Silva'
                        {...registrarCampos('nome')}
                    />
                    {errosDoFormulario.nome && (
                        <p className="error-message"> {errosDoFormulario.email.message}</p>
                    )}
                </div>
                <button type='submit' disabled={estaEnviando}>
                    {estaEnviando ? 'Cadastrando...' : 'Cadastrar'}
                </button>
            </form>
        </div>
    )
}