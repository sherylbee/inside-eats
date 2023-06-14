import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createPortal } from 'react-dom';
import pageBg from "../src/assets/chef-flame3.jpg"

const PageBg = ()=>{
  return (
  createPortal(<img src={pageBg} alt="kitchen" className=""/>, document.getElementById('page-bg'))
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <PageBg/>
        <App />
    </>
);
