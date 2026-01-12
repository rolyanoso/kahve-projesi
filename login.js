//******MUI KÜTÜPHANESİ******
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import Alert from '@mui/material/Alert';


//******CSS******
import '../App.css';

//******REACT*****
import { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
//****** REACT ROUTER******
import { useNavigate } from 'react-router-dom';
//*****OTHER****
import { v4 as uuidv4 } from 'uuid';
export function Login() {

    //*****HOOKES*******
    const [showError, setShowError] = useState(false);

    const [isAnimating, setIsAnimating] = useState(false);
    const [open, setOpen] = useState(false);
    const [alertType,setAlertType] = useState(null);
    const [mode,setMode] = useState("login");
    //------------------------------------------
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    //------------------------------------------
    const [users,setUsers] = useState([]);



    const theme = useTheme();
    const navigate = useNavigate();

    useEffect(()=>{
        const storedUsers = JSON.parse(localStorage.getItem("newUsers"));
        if(storedUsers){
            setUsers(storedUsers);
        };
    },[]);
    //**********FUNCTIONS**********

    function handleSaveUsers(e_mail,pass){
        if(mode ==="signup"){
            if(userName && userEmail && userPass ){
                const newUser =  {
                    id: uuidv4(), 
                    name :userName, 
                    email: userEmail, 
                    password:userPass
                };

                const updatedUsers = [...users,newUser];
                setUsers(updatedUsers);
                localStorage.setItem("newUsers",JSON.stringify(updatedUsers));

                setUserName("");
                setUserEmail("");
                setUserPass("");

                setAlertType("success");
                setOpen(true);
                
            }else{
                setAlertType("warning");
                setOpen(true);
     
            }
        }else{
            const oldUser = users.find(u => u.email === e_mail && u.password === pass);

            if(oldUser){
                navigate("/home");
            }else{
                setShowError(true);
                setTimeout(()=>{
                    setShowError(false);
                },5000)
            }
        }  
    }
    function handleCloseAlert(){
        setOpen(false);
    };
    //****** JSX *******
    return (
      <Container 
        className="page-bg"
        maxWidth={false}
        disableGutters
        sx={{
            minHeight: '100vh',
            backgroundImage: `url(${theme.custom.pageBgImage})`,
        }}>
        <div style={{height:"100vh",display: "flex",justifyContent:"center",alignItems:"center"}}>
            <Box
            className={`formBoxStyle ${mode === "login" ? "form-login":"form-signup"} ${isAnimating ? "form-animating" : ""}`}
        >
            <form style={{width:"350px",height:"350px",display:"grid",justifyContent:"center",justifyItems:"center",borderRadius:"6px"}} >
                    <div style={{padding:"25px"}}>
                        <Grid container spacing={2} columns={16}>
                            <Grid size={8}>
                                <Button 
                                    type="button" 
                                    className='btnHover' 
                                    style={{
                                        width:"150px",
                                        fontWeight:"bold",
                                        fontFamily:"cursive",
                                        fontSize:"25px"
                                        }} 
                                    onClick={()=>{
                                        setIsAnimating(true);
                                        setTimeout(() => {
                                            setMode("signup")
                                            setIsAnimating(false)
                                        },200);
                                         
                                    }}>
                                    Sign up
                                </Button>
                            </Grid>
                            <Grid size={8} >
                                <Button 
                                    type="button"
                                    className='btnHover' 
                                    color="primary" 
                                    style={{
                                        width:"150px",
                                        fontWeight:"bold",
                                        fontFamily:"cursive",
                                        fontSize:"25px"
                                        }} 
                                    onClick={()=>{
                                        setIsAnimating(true);
                                        setTimeout(() => {
                                            setMode("login");
                                            setIsAnimating(false);
                                        }, 200);
                                    }}>
                                        Log in
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    {
                        mode === "signup" && (
                            <input 
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder='Name' 
                            type='text'/>
                        )
                    }
                    <br/>
                    <input
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)} 
                        placeholder='e-mail' 
                        type='email'
                    />
                    <br/>
                    <input 
                        
                        value={userPass}
                        onChange={(e) => setUserPass(e.target.value)}
                        placeholder='Password' 
                        type='password' 
                    />
                    <br/>
                    
                    <Button 
                        variant='contained' 
                        color="secondary" 
                        endIcon={mode === "login" ? <LoginIcon color='primary'/> :<AddToHomeScreenIcon color='primary'/>}
                        onClick={() => handleSaveUsers(userEmail,userPass)}
                    >
                        {mode === "login" ? "Login" : "Sign Up"}
                    </Button><br/>
            </form>
            

            </Box>
        </div>
            {showError && (
                <div className="alert alert-error" style={{margin:"16px 0", display:"flex", justifyContent:"center"}}>
                    <span className="alert-icon">⚠</span>
                    <span className="alert-text">
                        There is no such user. Please sign up first.
                    </span>
                </div>
            )}
            {typeof alertType === "string" && (
                    <Snackbar 
                        open={open}
                        autoHideDuration={4000}
                        onClose={handleCloseAlert}
                    >
                        <Alert severity={alertType}>
                            {alertType === "warning"
                                ? "Please fill all blanks"
                                : "Sign up is successful"}
                        </Alert>
                    </Snackbar>
            )}
        </Container>
    );
}