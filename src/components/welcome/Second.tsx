import {WelcomeLayout} from './WelcomeLayout';
import s from './WelcomeLayout.module.scss';
import logo from '../../assets/vue.svg';
import {RouterLink} from 'vue-router';

export const Second = () => {
  const slots = {
    icon:()=> <img class={s.logo} src={logo} alt=""/>,
    title:()=><h2>会挣钱<br/>还要会省钱</h2>,
    buttons:()=> <><RouterLink class={s.fake} to='/start'>跳过</RouterLink>
      <RouterLink to='/welcome/3'>下一页</RouterLink>
      <RouterLink to='/start'>跳过</RouterLink></>
  }
  return <WelcomeLayout v-slots={slots}/>
}

Second.displayName = 'Second'



