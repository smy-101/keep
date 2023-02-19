import { defineComponent } from "vue";
import s from './WelcomeLayout.module.scss'
import logo from '../../assets/vue.svg'
import {RouterLink} from 'vue-router';
import {WelcomeLayout} from './WelcomeLayout';

export const First = defineComponent({
  setup:() => {
    const slots = {
      icon:()=> <img class={s.logo} src={logo} alt=""/>,
      title:()=><h2>会挣钱<br/>还要会省钱</h2>,
      buttons:()=> <><RouterLink class={s.fake} to='/start'>跳过</RouterLink>
        <RouterLink to='/welcome/2'>下一页</RouterLink>
        <RouterLink to='/start'>跳过</RouterLink></>
    }

    return () => (
      <WelcomeLayout v-slots={slots}/>
    );
  },
});
