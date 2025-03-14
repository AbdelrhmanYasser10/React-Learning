import './index.scss';
import { CircleX } from 'lucide-react';
import { ReactNode } from 'react';

interface IProps {
  type:string,
  icon:ReactNode,
  title:string,
  description:string,

}


const Alert = ({type,icon,title,description}:IProps) => {
  return (
    <div className={type}>
      <div className='alert-header'>
      <div className='alert-title'>
      <span>
        {icon}
      </span>
    
      <h4>{title}</h4>
      </div>
      <span>
      <CircleX/>
      </span>
      </div>
      
    
      <p>
        {description}
      </p>
      
    </div>
  );
}

export default Alert;
