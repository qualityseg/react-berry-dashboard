import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from './api'; 
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
  Container,
} from '@material-ui/core';
import countries from 'i18n-iso-countries';
import ptBr from 'i18n-iso-countries/langs/pt.json';
import './Estilo.css';
countries.registerLocale(ptBr);

// Exemplo de lista de estados, substitua pela lista correta.
const estadosBrasil = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];

const NovoUsuarioPage = () => {
  const [pais, setPais] = useState(''); // Armazena o país selecionado
  const [estado, setEstado] = useState(''); // Armazena o estado selecionado

  const [listaEstados, setListaEstados] = useState([]); // Armazena a lista de estados
  
  // estados adicionais para lidar com os campos de endereço
  
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');


  // Atualiza a lista de estados quando o país é alterado
  useEffect(() => {
    if (pais === 'BR') { // Se o país selecionado for o Brasil
      setListaEstados(estadosBrasil); // Carrega a lista de estados do Brasil
    } else {
      setListaEstados([]); // Limpa a lista de estados se o país selecionado não for o Brasil
    }
  }, [pais]);

  // função para lidar com a mudança no campo de CEP
  function handleCepChange(event) {
    const cepInput = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    setCep(event.target.value);
    if (cepInput.length === 8) { // se o CEP tiver 8 dígitos
      axios.get(`https://viacep.com.br/ws/${cepInput}/json/`)
        .then((response) => {
          const { logradouro, bairro, localidade, uf } = response.data;
          setLogradouro(logradouro);
          setBairro(bairro);
          setCidade(localidade);
          setEstado(uf);
        });
    }
  }

  // Função para lidar com a submissão do formulário
  function handleSubmit(event) {

    event.preventDefault();
  
    const data = new FormData(event.target);
  
    const userData = {
      name: data.get('nome'), 
      surname: data.get('sobrenome'),
      birthDate: data.get('data de nascimento'), 
      email: data.get('email'),
      gender: data.get('sexo'),
      phone: data.get('telefone pessoal'),
      phone2: data.get('telefone adicional'),
      cpf: data.get('cpf'),
      cnpj: data.get('cnpj'),
      registration: data.get('matricula'),
      obs: data.get('observacoes'),
      address: data.get('endereco'),
      number: data.get('numero'),
      complement: data.get('complemento'),
      district: data.get('bairro'),
      city: data.get('cidade'),
      state: data.get('estado'),
      country: data.get('pais'),
      zipCode: data.get('cep'),
      unit: data.get('unidade'),
      sector: data.get('setor'),
      role: data.get('cargo'),
      institution: data.get('instituicao'),

      
    };

    
    api.post('http://localhost:5000/users/new', userData)
      .then(response => {
        console.log('Saved user', response);
      })
      .catch(error => {
        console.log('Error saving user', error);
      });
  
  }

  function handlePaisChange(event) {
    setPais(event.target.value);
  }

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
      
        <Grid container spacing={2}>
        
          <Grid item xs={12}>
            <Typography variant="h4" style={{fontSize: '27px', fontWeight: 'bold'}}>
              Identificação
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Nome" name="nome" fullWidth required />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField label="Sobrenome" name="sobrenome" fullWidth required />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField label="Email" name="email" fullWidth required />
          </Grid>
        
          <Grid item xs={12} sm={6}>  
            <TextField 
              label="Data Nascimento" 
              name="data de nascimento" 
              type="date"
              InputLabelProps={{ shrink: true }} 
              fullWidth 
              required 
            />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel id="sexo-label">Sexo</InputLabel>
              <Select labelId="sexo-label" id="sexo" name="sexo" required>
                <MenuItem value="masculino">Masculino</MenuItem>
                <MenuItem value="feminino">Feminino</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        <Grid item xs={6}>
          <TextField label="Telefone Pessoal" name="telefone pessoal" fullWidth required />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Telefone Adicional" name="telefone adicional" fullWidth />
        </Grid>
      </Grid>

      <Typography variant="h4" style={{fontSize: '27px', fontWeight: 'bold'}}>Documentos</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField label="CPF" name="cpf" fullWidth required />
        </Grid>
        <Grid item xs={6}>
          <TextField label="CNPJ" name="cnpj" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Matrícula" name="matricula" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Observações" name="observacoes" fullWidth />
        </Grid>
      </Grid>

      <Typography variant="h4" style={{fontSize: '27px', fontWeight: 'bold'}}>Endereço</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="Logradouro" value={logradouro} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Número" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Complemento" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Bairro" value={bairro} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Cidade" value={cidade} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="estado-label">Estado</InputLabel>
              <Select labelId="estado-label" id="estado" value={estado} onChange={(event) => setEstado(event.target.value)}>
                {estadosBrasil.map((state) => (
                  <MenuItem key={state} value={state}>{state}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField label="País" value="Brasil" disabled fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="CEP" value={cep} onChange={handleCepChange} fullWidth />
          </Grid>
        </Grid>

      <Typography variant="h4" style={{fontSize: '27px', fontWeight: 'bold'}}>Empresa</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField label="Unidade" name="unidade" fullWidth required />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Setor" name="setor" fullWidth required />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Cargo" name="cargo" fullWidth required />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Instituição" name="instituicao" fullWidth required />
        </Grid>
      </Grid>

      <FormControlLabel
        control={<Checkbox name="terms" required />}
        label="Solicitar recuperação de acesso."
      />

      <Button variant="contained" color="primary" type="submit">
        Enviar
      </Button>
      </form>
    </Container>
  );
};

export default NovoUsuarioPage;
