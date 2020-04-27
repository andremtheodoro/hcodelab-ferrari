import Link from 'next/link'

const LinkItem = [
    {id:1, link:'/',label:'Home'},
    {id:2, link:'/historia',label:'Historia'},
    {id:3, link:'/galeria',label:'Galeria'},
    {id:4, link:'/contato',label:'Contato'},
]
const LinkMenu = (itens) => (

    <li>
        <Link href={itens.link}>
            <a title={itens.label}>{itens.label}</a>
        </Link>
    </li>
)

export default function Menu(){
    return (
        <div className="headerMenu">
            <ul>
                     {LinkItem.map((item)=> (
                     <LinkMenu key={item.id} link={item.link} label={item.label} />
              ))}
              </ul>
              <style jsx global>{`
                    li {
                        list-style: none;
                    }
                    @media (min-width: 320px) {
                        .headerMenu {
                            width:100%;
                            position: relative;
                            //overflow: hidden;
                        }
                        ul {
                            width: 90%;
                            height: 100vh;
                            background: rgba(230, 228, 224, 0.85 );
                            position: absolute;
                            right: 0;   
                            z-index: 10;
                            margin:0;   
                            padding:0;
                            top: 72px;  
                            transition-duration: 1s;
                        }                                               
                        li {
                            width: 100%;
                            line-height: 40px;
                            backgroud: rgba(230, 228, 224, 0.85);
                            display: block;
                            padding-left: 5%;
                        }
                        a{
                            text-decoration:none;
                            color: #707070;
                            font-size:1.5em;
                            font-family:'open Sans';
                        }
                    }
                    @media (min-width: 960px) {
                        ul{
                            width: 80%;
                            height:auto;
                            margin-left: 15%;
                            position:relative;
                            background: none;
                            top: 0;
                        }
                        a {
                            font-size:1em;
                        }
                        li {
                            display: inline-block;
                            width:18%;
                            line-height: 75px;
                            text-align: center;
                        }
                    }
                `}</style>
            </div>
        
    )
}  
    


