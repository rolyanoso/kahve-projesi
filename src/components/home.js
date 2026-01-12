import "../home.css";
import { ProductsList } from "../contexts/productsContext";
//*******MUI KÜTÜPHANESİ*********
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Alert from "@mui/material/Alert";
//**********MUI ICONS**************
import HomeIcon from '@mui/icons-material/Home';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AddTaskIcon from '@mui/icons-material/AddTask';
//***********REACT***********
import  {useTranslation} from 'react-i18next';
import { useState,useEffect , useContext} from "react";
//*******REACT ROUTES********
import { useNavigate } from 'react-router-dom';

import Button from "@mui/material/Button";
//******OTHER*********


const imagesList = [
  {
    url : "/images/other/coldCoffee.jpg",
    title:"ICED COFFEE",
    key: "coldCoffee" ,
  },
  {
    url : "/images/other/hotCoffee.jpg",
    title:"HOT BREWS",
    key: "hotBrews",
  },
  {
    url : `/images/other/sweets.jpg`,
    title:"DESSERTS",
    key: "desserts",
  },
  {
    url : "/images/other/tea.jpg",
    title:"TEA & OTHER DRINKS",
    key: "teaAndOther",

  },
  
  
  {
    url : "/images/other/shop.jpg",
    title:"SHOP",
    key: "shop" ,
  },
  {
    url : "/images/other/Signature Recipes.jpg",
    title:"SIGNATURE RESIPES",
    key: "specialFlavors",
  },
];


export function Home() {
  const {basket,setBasket,totalPrice,decreaseFromBasket,addToBasket} = useContext(ProductsList);
  const { t, i18n } = useTranslation();

  const [showSuccess, setShowSuccess] = useState(false);

  const [page,setPage] = useState("home");
  const [lan,setLan] = useState("en");

  const navigate = useNavigate();
  useEffect(() => {
    
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showSuccess]);
  function handleClick(id){
    navigate(`/productsList/${id}`);
    console.log(id)
  }
  function handleChangeLanguage(){
    if(lan === "tr"){
      setLan("en");
      i18n.changeLanguage("en");
    }else{
      setLan("tr");
      i18n.changeLanguage("tr");
    }
  }
  return (
    
    <>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)'}}>
        <Box sx={{ gridColumn: 'span 3' ,}}>
            <div className="sideBar">
                <img className="coffeeIcon" src="/images/other/coffeeIcon.png" alt="coffeeIcon"/>
                <Typography variant="h6" sx={{textAlign:"center",fontFamily:"math" }}>
                  COFFEE ARIA
                </Typography>
                <br/>
                <hr/>
                <br/>
                <br/>
                <ul className="menu">
                  <li
                    onClick={() => setPage("home")}
                  >
                    <span>HOME</span>
                    <HomeIcon className="menuIcon"/>
                  </li>
                  <li
                    onClick={()=>setPage("about")}
                  >
                    <span>ABOUT US</span>
                    <HandshakeIcon className="menuIcon"/>
                  </li>
                  <li 
                    onClick={() => setPage("basket")}
                  >
                    <span>BASKET</span>
                    <ShoppingCartIcon className="menuIcon"/>
                  </li>
                  <li
                    sx={{border:"none",background:"none"}}
                    onClick={() => navigate("/")}
                  >
                    <span>LOG OUT</span> 
                    <LogoutIcon className="menuIcon"/>
                  </li>
                </ul>
                <br/>
                <br/>
                <hr/>
                <div className="socialMedia">
                  <Typography
                    component="a"
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body2"
                  >
                    <FacebookIcon className="socialMediaIcon"/>
                  </Typography>
                  <Typography
                    component="a"
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body2"
                  >
                    <InstagramIcon className="socialMediaIcon"/>
                  </Typography>
                  <Typography
                    component="a"
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body2"
                  >
                    <TwitterIcon className="socialMediaIcon"/>
                  </Typography>
                  <Typography
                    component="a"
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body2"
                  >
                    <LinkedInIcon className="socialMediaIcon"/>
                  </Typography>
                  

                </div>
            </div>
        </Box>
        <Box sx={{ gridColumn: 'span 9',}}>
          <Container  maxWidth="lg" style={{height:"100vh",marginTop:"15px"}}>
              <Typography variant="h3" sx={{textAlign:"center",fontFamily:"math" }}>
                COFFEE ARIA
                <hr className="menuHR"/>
                <Box sx={{display: page !== "home" ? "none" :"block",marginLeft:"7px"}}>
                  <Typography sx={{fontSize:"17px",fontFamily:"cursive",padding:"20px"}}>“We are here to provide you with the best services; our priority is customer satisfaction. ”</Typography><br/>
                  <Typography variant="h6" sx={{fontFamily:"fantasy",textAlign:"left"}}>Our Services :</Typography>
                
                </Box>
                
              </Typography>
              {page === "home" ?

                <Box className="imageWrapper">
                    {imagesList.map(i =>
                        <button key={i.key} onClick={()=> handleClick(i.key)} className="imageBtn">
                          <div className="imageBox">
                            <img className="imageList" src={i.url} alt={i.title}/>

                            <div className="overlay"></div>
                            <span className="imageText">{i.title}</span>
                          </div>
                        </button>
                      )}
                
              </Box>
                
                : page === "about" ? 
                <Box sx={{ maxWidth: "700px", margin: "0 auto", marginTop: "100px" }}>
                        <Typography
                          variant="h5"
                          sx={{
                          fontFamily: "cursive",
                          fontWeight: "bold",
                          color: "rgb(10,25,48)",
                          textShadow: "1px 3px 3px rgba(52, 47, 47, 0.63)",
                          mb: 3
                        }}>
                          {t("about.title")}
                        </Typography>
                        
                          <p>{t("about.bodyText")}</p>
                  
                        <Button
                          onClick={handleChangeLanguage}
                          variant="contained"
                          color="secondary"
                          sx={{mt:3}}
                        >
                          {lan === "en" ? "TR" : "EN"}
                        </Button>
                </Box>
                : 
                
                <Box className="basketScroll" sx={{ width:"100%",maxHeight:"calc(100vh - 120px)",overflowY:"auto",paddingRight:"8px", }}>
                  <Typography
                    sx={{ textAlign: "center", margin: "35px", fontFamily: "cursive" }}
                    variant="h3"
                  >
                    <span
                      style={{
                        textShadow: "3px 4px 3px rgba(115, 89, 12, 0.62)",
                        color: "rgb(120, 76, 54)",
                      }}
                    >
                      Basket
                    </span>
                  </Typography>

                  <ul>
                    {basket.map(item => (
                      <div key={item.id}>
                        <li style={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "200px" }}>
                          <Grid container spacing={2} columns={12} sx={{ padding: "20px", width: "100%" }}>
                            
                            {/* IMAGE */}
                            <Grid size={3}>
                              <img className="menuImages" src={item.url} alt={item.name} />
                            </Grid>

                            {/* NAME + PRICE */}
                            <Grid size={7}>
                              <Grid spacing={5} columns={12}>
                                <Grid
                                  size={6}
                                  sx={{
                                    margin: "20px",
                                    fontFamily: "serif",
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    textShadow: "1px 2px 3px rgba(95, 93, 93, 0.72)",
                                  }}
                                >
                                  {item.name}
                                </Grid>

                                <Grid
                                  size={6}
                                  sx={{
                                    marginLeft: "20px",
                                    fontSize: "17px",
                                    fontWeight: "bold",
                                    color: "rgb(15, 127, 71)",
                                    textShadow: "1px 1px 1px rgba(152, 215, 100, 0.8)",
                                  }}
                                >
                                  {(item.price * item.quantity).toFixed(2)} $
                                </Grid>
                              </Grid>
                            </Grid>

                            {/* + / - BUTTONS */}
                            <Grid
                              size={2}
                              sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}
                            >
                              <Button
                                onClick={() => decreaseFromBasket(item.id)}
                                sx={{
                                  minWidth: 0,
                                  padding: "10px",
                                  borderRadius: "50%",
                                  background: "#6f4e37",
                                  color: "#fff",
                                  fontWeight: "bold",
                                }}
                              >
                                −
                              </Button>

                              <span style={{ fontWeight: "bold" }}>{item.quantity}</span>

                              <Button
                                onClick={() => addToBasket(item)}
                                sx={{
                                  minWidth: 0,
                                  padding: "10px",
                                  borderRadius: "50%",
                                  background: "#a27454",
                                  color: "#fff",
                                  fontWeight: "bold",
                                }}
                              >
                                +
                              </Button>
                            </Grid>
                          </Grid>
                        </li>

                        <hr className="menuHR" />
                      </div>
                    ))}
                  </ul>

                </Box>
              }  
              {/* TOTAL */}
                  <Typography
                    sx={{
                      display: page !== "basket" ? "none" : "flex",
                      alignItems: "center",
                      justifyContent:"space-between",
                      fontSize: "20px",
                      fontWeight: "bold",
                      height: "45px",
                      background: "rgb(229, 232, 228)",
                    }}
                  >
                    {basket.every(item => item.quantity === 0) 
                        ? "The Basket Is Empty" 
                        : `Total Price : ${totalPrice.toFixed(2)} $` 
                    } 
                    <Button 
                      onClick={() => {
                        localStorage.removeItem("saveBasket");
                        setBasket([]);
                          setShowSuccess(true);                        
                      }}
                      sx={{height:"100%",display: basket.length === 0 ? "none" : "block"}}  
                      variant="contained" 
                      color="secondary"
                      
                      
                    > 
                    Confirm
                    </Button>
                  </Typography><br/>
                  {showSuccess && (
                    <Alert security="success"
                        
                        icon={false}
                        sx={{
                            width:230,
                            position: "fixed",
                            bottom: 24,
                            left: 24,
                            background:
                                "linear-gradient(135deg, #3e2723, #6f4e37, #d18b47)",
                            backgroundSize: "200% 200%",
                            color: "#fff",
                            fontFamily: "-apple-system",
                            fontSize: "15px",
                            fontWeight: 600,
                            letterSpacing: "0.6px",
                            borderRadius: "18px",
                            padding: "16px 22px",
                            boxShadow:
                                "0 0 0 0 rgba(209, 139, 71, 0.7), 0 12px 30px rgba(62, 39, 35, 0.6)",
                            animation:
                                "coffeeSlideIn 0.5s ease-out",
                        }}
                    >
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>
                            <span>Your order has been successfully received.</span><AddTaskIcon/>
                        </div>
                        
                    </Alert> 
                    
                  )}
                  
          </Container>
        </Box>

      </Box>
    </>
  );
}
