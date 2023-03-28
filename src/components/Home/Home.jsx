import { Menu } from '../ui/Menu/Menu';
import { Presentation } from './Presentation';
import { Boxes } from './Boxes';
import { HelpBook } from './HelpBook';
import { Foot } from '../ui/Foot/Foot';
import { Signup } from './Signup';
import { ChatAstro } from '../ui/Chat/ChatAstro';
import './Home.css';

export const Home = () => {
  

  return (
    <div className="container">

      <Menu />

      <Presentation />

      <Boxes />

      <Signup />

      <HelpBook />

      <Foot />

      <ChatAstro />

    </div>
  )
}