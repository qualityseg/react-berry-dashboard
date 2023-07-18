// assets
import { IconUserPlus } from '@tabler/icons';

// constant
const icons = {
  IconUserPlus: IconUserPlus,
};

//-----------------------|| UTILITIES MENU ITEMS ||-----------------------//

export const utilities = {
  id: 'Menu e Serviços',
  title: 'Menu e Serviços',
  type: 'group',
  children: [
    {
      id: 'Usuarios',
      title: 'Usuários',
      type: 'collapse',
      icon: icons['IconUsers'],
      children: [
        {
          id: 'todos-usuarios',
          title: 'Todos os Usuários',
          type: 'item',
          url: '/usuarios/todos',
          breadcrumbs: false
        },
        {
          id: 'administradores',
          title: 'Administradores',
          type: 'item',
          url: '/usuarios/administradores',
          breadcrumbs: false
        },
        {
          id: 'medicos',
          title: 'Médicos',
          type: 'item',
          url: '/usuarios/medicos',
          breadcrumbs: false
        },
        {
          id: 'usuarios-registrados',
          title: 'Usuários Registrados',
          type: 'item',
          url: '/usuarios/registrados',
          breadcrumbs: false
        },
        {
          id: 'usuarios-instanciados',
          title: 'Usuários Instanciados',
          type: 'item',
          url: '/usuarios/instanciados',
          breadcrumbs: false
        },
        {
          id: 'novo-usuario',
          title: 'Novo Usuário',
          type: 'item',
          url: '/usuarios/novo',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'Instituicoes',
      title: 'Instituições',
      type: 'collapse',
      icon: icons['IconBriefcase'],
      children: [
        {
          id: 'minhas-instituicoes',
          title: 'Minhas Instituições',
          type: 'item',
          url: '/instituicoes/minhas',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'Programas',
      title: 'Programas',
      type: 'collapse',
      icon: icons['IconLayers'],
      children: [
        {
          id: 'todos-programas',
          title: 'Todos os Programas',
          type: 'item',
          url: '/programas/todos',
          breadcrumbs: false
        }
      ]
    }
  ]
};
