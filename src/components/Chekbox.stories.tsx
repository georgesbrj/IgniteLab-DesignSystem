import { Meta,StoryObj} from '@storybook/react';
import {Checkbox,CheckboxProps} from './Checkbox';

export default {
    title: 'Components/Checkbox',
    component:Checkbox,
    args: {},
    argTypes:{},
    decorators:[
        (Story)=>{
            return (
               <div className='flex items-center gap-2 text-white'>
                 {Story()}
                 <span>Lembrar por 30 dias</span>           
               </div>
            );
        }
    ]
} as Meta<CheckboxProps>

export const Default:StoryObj<CheckboxProps> = {}
 