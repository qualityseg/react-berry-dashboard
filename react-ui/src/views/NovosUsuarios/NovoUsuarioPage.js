import React, { useState, useEffect } from 'react';
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
  const [listaPaises, setListaPaises] = useState([]); // Armazena a lista de países
  const [listaEstados, setListaEstados] = useState([]); // Armazena a lista de estados

  // Inicializa a lista de países quando o componente é montado
  useEffect(() => {
    setListaPaises(Object.entries(countries.getNames('pt')));
  }, []);

  // Atualiza a lista de estados quando o país é alterado
  useEffect(() => {
    if (pais === 'BR') { // Se o país selecionado for o Brasil
      setListaEstados(estadosBrasil); // Carrega a lista de estados do Brasil
    } else {
      setListaEstados([]); // Limpa a lista de estados se o país selecionado não for o Brasil
    }
  }, [pais]);

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
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
      
        <Grid container spacing={2}>
        
          <Grid item xs={12}>
            <Typography variant="h4" style={{fontSize: '27px', fontWeight: 'bold'}}>
              Identificação
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Nome" fullWidth />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField label="Sobrenome" fullWidth />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField label="Email" fullWidth />
          </Grid>
        
          <Grid item xs={12} sm={6}>  
            <TextField label="Data Nascimento" fullWidth />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="sexo-label">Sexo</InputLabel>
              <Select labelId="sexo-label" id="sexo">
                <MenuItem value="masculino">Masculino</MenuItem>
                <MenuItem value="feminino">Feminino</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        <Grid item xs={6}>
          <TextField label="Telefone Pessoal" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Telefone Adicional" fullWidth />
        </Grid>
      </Grid>

      <Typography variant="h4" style={{fontSize: '27px', fontWeight: 'bold'}}>Documentos</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField label="CPF" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="CNPJ" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Matrícula" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Observações" fullWidth />
        </Grid>
      </Grid>

      <Typography variant="h4" style={{fontSize: '27px', fontWeight: 'bold'}}>Endereço</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField label="Logradouro" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Número" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Complemento" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Bairro" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Cidade" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="estado-label">Estado</InputLabel>
            <Select labelId="estado-label" id="estado" value={estado} onChange={(event) => setEstado(event.target.value)}>
              {listaEstados.map((state) => (
                <MenuItem key={state} value={state}>{state}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="pais-label">País</InputLabel>
            <Select labelId="pais-label" id="pais" value={pais} onChange={(event) => setPais(event.target.value)}>
              {listaPaises.map((country) => (
                <MenuItem key={country[0]} value={country[0]}>{country[1]}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField label="CEP" fullWidth />
        </Grid>
      </Grid>

      <Typography variant="h4" style={{fontSize: '27px', fontWeight: 'bold'}}>Trabalho</Typography>
        <Grid container spacing={2}>

          <Grid item xs={6}>
            <TextField label="Unidade" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="Setor" fullWidth />
          </Grid>  

          <Grid item xs={6}>
            <TextField label="Cargo" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="Instituição" fullWidth />
          </Grid>

        </Grid>

        <Typography variant="h4" style={{fontSize: '27px', fontWeight: 'bold'}}>
          Acesso
        </Typography>

        <Grid item xs={12}>
          <FormControlLabel 
            control={<Checkbox />} 
            label="Solicitar recuperação de acesso" 
          />
        </Grid>

        <Button 
          type="submit"
          fullWidth
          variant="contained"
          color="primary"  
        >
          Salvar
        </Button>

      </form>
    </Container>
  );
}

export default NovoUsuarioPage;
