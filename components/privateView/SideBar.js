import SideBarDiv from '../styled/SideBarDiv'
import { ProSidebar, SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

export default function SideBar () {
  return (
  <SideBarDiv>
    <ProSidebar>
    <SidebarHeader> Menu </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem>Comentários</MenuItem>
      </Menu>
    </ProSidebar>
  </SideBarDiv>
  )
}