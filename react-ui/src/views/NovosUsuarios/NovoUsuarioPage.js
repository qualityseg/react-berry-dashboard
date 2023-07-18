import React, { useState, useEffect } from 'react';
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
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para salvar dados no banco de dados aqui
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
