import Navbar from "../components/Navbar";
import { useRef, useState } from "react";
import { Button, Container, Alert, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth()
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    
    try{
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value).then(async(result) => {
        localStorage.setItem('userId', result.user.uid);

        const docRef = doc(db, "users", result.user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          navigate('/exercises');
        } else {
          setError('Failed to Log In')
        }
      })
      
    } catch {
      setError('Failed to Log In')
    }
    setLoading(false)
  }

  return (
    <div>
      <Navbar/>
        <div className="login-surface">
          <Container className="d-flex align-items-center justify-content-center" 
            style={{minHeight: "90vh"}}>
            <div className="w-100" style={{maxWidth:"450px", marginTop:"13vh", marginBottom:"20vh"}}>
              <Card className="h-100 w-100" style={{backgroundColor:"rgb(77, 74, 74)"}}>
                <Card.Body>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form className="form" onSubmit={handleSubmit} style={{color:"white"}}>
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
                    <Button disabled={loading} className="btn btn-primary mt-3 text-center justify-content-center" type="submit" 
                    style={{backgroundColor:"rgb(212, 96, 115)", color:"black", fontWeight:"700", width:"30%", marginLeft:"35%" }} > Log In</Button>
                  </Form>
                </Card.Body>
                <div className="text-center d-flex justify-content-center list-unstyled mb-2" style={{color:"white"}} >
                  Dont have an account?<Link to={"/Login"}><li>Signup</li></Link>
                </div>
              </Card>
            </div>
          </Container>
      </div>
    </div>
  )
}

export default Login