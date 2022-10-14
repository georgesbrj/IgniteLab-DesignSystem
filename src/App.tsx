import { Heding } from './components/Heding';
import { Text } from './components/Text';
import { Logo } from './components/Logo';
 
import './styles/global.css';
import { TextInput } from './components/TextInput';
import { Envelope, LockKey } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {
   
  return (
   <div className="w-screen h-screen flex-col bg-gray-900 flex items-center justify-center text-gray-100">
     <header className='flex flex-col items-center'>
      <Logo/>
      
      <Heding size='lg' className='mt-4'>
        Ignite Lab
      </Heding>

      <Text size="lg" className='text-gray-400 mt-2'>
        Faça Login e comece a usar!     
      </Text>
     </header> 

     <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>

        <label htmlFor='email'  className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de E-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>              
            </TextInput.Icon>
            <TextInput.Input  type="email" id='email' placeholder='Digite seu e-mail' />
          </TextInput.Root>
        </label>

        <label htmlFor='password'  className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <LockKey/>              
            </TextInput.Icon>
            <TextInput.Input  type="password" id="password" placeholder='********' />
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox  id='remember'/>
          <Text size='sm' className='text-gray-200'>Lembrar por 30 dias</Text>
        </label>

        <Button type="submit" className='mt-4 '>Entrar na Plataforma</Button>
     </form>

     <footer className='flex flex-col items-center gap-4 mt-8'>
      <Text asChild size='sm'>
        <a href="#" className='text-gray-400 underline'>Esqueceu sua senha?</a>
      </Text>
        <a href="#" className='text-gray-400 underline'>Não possui conta? Crie uma agora!</a>
     </footer>
   </div>
  )
}

 
