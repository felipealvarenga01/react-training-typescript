import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import {Avatar} from "./Avatar.tsx";

export function Sidebar () {
    return (
      <aside className={styles.sidebar}>
          <img
              className={styles.cover}
               src="https://images.unsplash.com/photo-1574060275764-4e3e046ff29c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxqYXBhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=50" alt=""/>
        <div className={styles.profile}>
            <Avatar src="https://github.com/felipealvarenga01.png"/>
            
            <strong>Felipe Alvarenga</strong>
            <span>Developer</span>
        </div>

          <footer>
              <a href="">
                  <PencilLine size={20}/>
                  Editar seu perfil
              </a>
          </footer>

      </aside>
    );
}