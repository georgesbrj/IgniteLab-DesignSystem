import { Meta,StoryObj} from '@storybook/react';
import {Heding,HedingProps} from './Heding';

export default {
    title: 'Components/Heding',
    component:Heding,
    args: {
       children: 'allsdxsadxa',
       size: 'md',
    },
    argTypes:{
        size:{
            options: ['sm','md','lg'],
            control:{
                type: 'inline-radio'
            }
        }
    }
} as Meta<HedingProps>

export const Default:StoryObj<HedingProps> = {}
export const Small:StoryObj<HedingProps> = {
    args:{
        size:'sm'
    }
}
export const Large:StoryObj<HedingProps> = {
    args:{
        size:'lg'
    }
}

export const CustomComponent:StoryObj<HedingProps> = {
    args:{
       asChild:true,
       children:(
         <h1>Texto com paragrafo</h1>
       ) 
    },
    argTypes:{
        children:{
        
                table:{
                    disable: true
                }
             
        },
        asChild:{
            table:{
                disable: true
            }
        }
    }
}