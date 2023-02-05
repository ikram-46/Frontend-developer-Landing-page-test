import { Link } from "react-scroll"
import { contacts, links } from "./entries"

const FooterUI =()=>{
    return(
        <div className="FooterUI">
          <div>
              <img src="/assets/logo.svg"/>
          </div>
          <div className="__links">
            {links.map((link, idx)=>(
              <Link key={idx}  activeClass="active" smooth spy to={link.id}>
                {link.label}
              </Link>
            ))}
           </div>

           <div className="__contacts">
             {contacts.map((contact, idx)=>(
                <div className="__item"key={idx}>
                  <img src={contact.icon}/>
                  <p>{contact.value}</p>
                </div>
             ))}
           </div>
        </div>
    )
}

export default FooterUI;