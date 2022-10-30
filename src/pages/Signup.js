import Navbar from "../components/Navbar";
import { useRef, useState } from "react";
import { Button, Container, Alert, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import '../App.css';
import { useAuth } from "../contexts/AuthContext";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [username, setUname] = useState('');
  const navigate = useNavigate();

  const setUsername = async() => {
    await setDoc(doc(db, "users", localStorage.getItem('userId')), {
      username 
    });
  } 

  async function handleSubmit(e) {
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match!')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value).then((result) => {
        localStorage.setItem('userId', result.user.uid);
        setUsername().then((result) => {
          navigate('/exercises');
        }).catch((e) => {
          setError(e)
        });
      })
    
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <div>
        <Navbar/>
        <div className="login-surface">
          <Container className="d-flex align-items-center justify-content-center" 
            style={{minHeight: "80vh"}}>
            <div className="w-100" style={{maxWidth:"500px", marginTop:"11.8vh", marginBottom:"13vh"}}>
              <Card className="h-100 w-100" style={{backgroundColor:"rgb(77, 74, 74)"}}>
                <Card.Body>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form className="form" onSubmit={handleSubmit} style={{color:"white"}}>
                    <Form.Group id="username">
                      <Form.Label style={{fontSize:"1.1rem"}} >Username</Form.Label>
                      <Form.Control type="username" onChange={(e)=> {setUname(e.target.value)}} style={{borderRadius:"15px", fontWeight:"650", fontSize:"1.1rem", marginBottom:"3%" }} 
                      required placeholder="Enter your username"/>
                    </Form.Group>
                    <Form.Group id="email">
                      <Form.Label style={{fontSize:"1.1rem"}}>Email</Form.Label>
                      <Form.Control type="email" style={{borderRadius:"15px", fontWeight:"650", fontSize:"1.1rem", marginBottom:"3%" }} 
                      ref={emailRef} required placeholder="Enter your email"/>
                    </Form.Group>
                    <Form.Group id="password">
                      <Form.Label style={{fontSize:"1.1rem"}}>Password</Form.Label>
                      <Form.Control type="password" style={{borderRadius:"15px", fontWeight:"650", fontSize:"1.1rem", marginBottom:"3%" }} 
                      ref={passwordRef} required placeholder="Enter your password"/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                      <Form.Label style={{fontSize:"1.1rem"}}>Confirm Password</Form.Label>
                      <Form.Control type="password" style={{borderRadius:"15px", fontWeight:"650", fontSize:"1.1rem", marginBottom:"3%" }} 
                      ref={passwordConfirmRef} required placeholder="Confirm Password"/>
                    </Form.Group>
                    <Button disabled={loading} className="btn btn-primary mt-3 text-center justify-content-center" type="submit" 
                    style={{backgroundColor:"rgb(212, 96, 115)", color:"black", fontWeight:"700", width:"30%", marginLeft:"35%" }} > Sign Up</Button>
                  </Form>
                </Card.Body>

                <div className="text-center d-flex justify-content-center list-unstyled mb-2" style={{color:"white"}} >
                  Already have an account?<Link to={"/Login"}><li>Login</li></Link>
                </div>

              </Card>

            </div>
          </Container>
      </div>
    </div>
  )
}

export default Signup