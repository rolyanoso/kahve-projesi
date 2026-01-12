import { useContext, useState,useRef,useEffect  } from "react";
import { ProductsList } from "../contexts/productsContext";
import {  useParams,useNavigate  } from "react-router-dom";
import "../home.css"

//************MUI KÜTÜPHANESI***********
import Typography from  '@mui/material/Typography';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AddTaskIcon from '@mui/icons-material/AddTask';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function Menu (){
    const {category } = useParams();
    const {allProducts,addToBasket ,basket} = useContext(ProductsList);
    const [alert,setAlert] = useState(false);
    const alertTimerRef = useRef(null);
    const navigate = useNavigate();
    
    
    // function addBasket(item){
    //     setBasket(prev =>[...prev,item]);
    //     setAlert(true);
        
    //     if(alertTimerRef.current){
    //         clearTimeout(alertTimerRef.current)
    //     }
    //     alertTimerRef.current = setTimeout(()=>{
    //         setAlert(false);
    //     },1500);
       
    // }
    // useEffect(() => {
    //     console.log(totalPrice)
    // }, [totalPrice]);
    return(
        <div>
            <Button
                onClick={() => navigate(-1)}
                    sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#6f4e37",
                    fontWeight: "bold",
                    "&:hover": {
                    backgroundColor: "rgba(111, 78, 55, 0.1)",
                    },
                }}
                >
                <ArrowBackIcon />
                Back
            </Button>
            <Typography sx={{textAlign:"center", margin:"35px",fontFamily:"cursive"}} variant="h3">
               <span style={{textShadow:"3px 4px 3px rgba(115, 89, 12, 0.62)",color:"rgb(120, 76, 54)"}}>Menu</span> <RestaurantMenuIcon sx={{fontSize:"42px",filter: "drop-shadow(3px 4px 1px rgba(115, 89, 12, 0.62))",color:"rgb(120, 76, 54)"}}/>
            </Typography>
            
                <ul>                
                    {allProducts[category]?.map(item => (
                        <div key={item.id}>
                            <li style={{display:"flex",justifyContent:"start",alignItems:"center",gap:"200px"}} >
                                <Grid container spacing={2} columns={12} sx={{padding:"20px",width:"100%"}}>
                                    <Grid size={3}>
                                        <img className="menuImages" src={item.url} alt={item.name}/>
                                    </Grid>
                                    <Grid size={7}>
                                        <Grid spacing={5} columns={12} >
                                            <Grid sx={{margin:"20px",fontFamily:"serif",fontSize:"20px",fontWeight:"bold",textShadow:"1px 2px 3px rgba(95, 93, 93, 0.72)"}} size={6}><span>{item.name}</span><br/></Grid>
                                            <Grid sx={{marginLeft:"20px",fontSize:"17px",fontWeight:"bold",color:"rgb(15, 127, 71)",textShadow:"1px 1px 1px rgba(152, 215, 100, 0.8)"}} size={6}><span>{item.price.toFixed(2)}$</span></Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid size={2} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                        <Button
                                        onClick={() => {
                                            addToBasket(item);
                                            setAlert(true);
        
                                            if(alertTimerRef.current){
                                                clearTimeout(alertTimerRef.current)
                                            }
                                            alertTimerRef.current = setTimeout(()=>{
                                                setAlert(false);
                                            },1500);
                                        } } 
                                        sx={{
                                            minWidth: 0,
                                            padding: "14px",
                                            borderRadius: "50%",
                                            background: "linear-gradient(135deg, #a27454, #a96522)",
                                            boxShadow: "0 8px 20px rgba(255, 118, 45, 0.45)",
                                            transition: "0.3s",
                                            position: "relative",
                                            overflow: "hidden",

                                            "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            inset: 0,
                                            borderRadius: "50%",
                                            background:
                                                "radial-gradient(circle, rgba(255,255,255,0.35) 10%, transparent 60%)",
                                            opacity: 0,
                                            transition: "0.3s",
                                            },

                                            "&:hover": {
                                            transform: "scale(1.15) rotate(6deg)",
                                            boxShadow: "0 12px 30px rgba(209, 198, 143, 0.65)",
                                            },

                                            "&:hover::after": {
                                            opacity: 1,
                                            },

                                            "&:active": {
                                            transform: "scale(0.95)",
                                            },
                                        }}
                                        >
                                            <AddShoppingCartIcon 
                                                sx={{
                                                    fontSize: "32px",
                                                    color: "#fff",
                                                    transition: "0.3s",
                                                    "&:hover": {
                                                        transform: "scale(1.2)",
                                                    },

                                                }}
                                            />
                                        </Button>
                                        
                                    </Grid>
                                    
                                </Grid> 
                            </li>
                            <hr className="menuHR"/>
                        </div>            
                    ))}
                </ul>
                {alert && (
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
                            <span>ADDED TO THE BASKET</span><AddTaskIcon/>
                        </div>
                        
                    </Alert> 
                )}
        </div>
    )
}