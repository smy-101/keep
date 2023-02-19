import { defineComponent } from "vue";
import {WelcomeLayout} from './WelcomeLayout'
import s from './WelcomeLayout.module.scss';
import logo from '../../assets/vue.svg';
import {RouterLink} from 'vue-router';

export const Fourth = defineComponent({
  setup: () => {
    return () => (
      <WelcomeLayout>
        {{
          icon:()=> <img class={s.logo} src={logo} alt=""/>,
          title:()=><h2>会挣钱<br/>还要会省钱</h2>,
          buttons:()=> <><RouterLink class={s.fake} to='/start'>跳过</RouterLink>
            <RouterLink to='/start'>完成</RouterLink>
            <RouterLink to='/start' class={s.fake}>跳过</RouterLink></>
        }}
      </WelcomeLayout>
    );
  },
});
