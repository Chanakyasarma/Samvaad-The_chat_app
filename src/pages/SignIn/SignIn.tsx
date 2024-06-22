import styled from "styled-components";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { firebaseAuth, firebaseFirestore, firebaseStorage } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { useUserStore } from "../../hooks";
import toast from "react-hot-toast";
import { TextWrapper, Wrapper } from "./Style";
import LoadingSpinner from "./Spinner";
import { FaEye, FaEyeSlash, FaCheck  } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const FormMainWrapper = styled.form`
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FormWrapper = styled.form`
  flex: 1;
  width: 500px;
  padding: 20px 30px;
  background-color: #001D4A;
  max-height: 500px;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    width: 300px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 5px;
  color: #ECA400;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #4d73fc;
  }
`;

const PasswordInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const PasswordInput = styled(Input)`
  padding-right: 40px; /* Add padding to accommodate the eye icon */
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #ECA400;
  font-size: 1.2rem;
`;

const FileInputLabel = styled.label`
  display: block;
  padding: 10px;
  font-size: 1rem;
  background-color: #ECA400;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #006992;
  }
  .indicator {
    margin-left: 10px;
  }
`;

const FileInputIndicator = styled.span`
  margin-left: 10px;
  font-size: 0.9rem;
`;

const FileInput = styled.input`
  display: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  background-color: #ECA400;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;

  &:hover {
    background-color: #006992;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const RadioLabel = styled.label`
  display: inline-block;
  font-size: 1rem;
  cursor: pointer;
  margin: 1px;
  padding: 10px;
  border: 2px solid #ECA400;
  border-radius: 10px;
  color: #ECA400;

  input {
    display: none;
  }

  input:checked + span {
    background-color: #ECA400;
  }

  span {
    display: block;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 2px solid #ECA400;
    border-radius: 50%;
    margin-right: 10px;
    float: left;
  }
`;

export default function SignIn() {
  const { currentUser } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setProfilePicture(null);
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    let photoURL = "";
    try {
      if (profilePicture) {
        const profilePicRef = ref(firebaseStorage, `profile_pictures/temp/${profilePicture.name}`);
        await uploadBytes(profilePicRef, profilePicture);
        photoURL = await getDownloadURL(profilePicRef);
      }

      const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { photoURL, displayName: name });

      await setDoc(doc(firebaseFirestore, `users/${user.uid}`), {
        uid: user.uid,
        email: user.email,
        displayName: name,
        photoURL,
      });

      toast.success("Signed Up! ✅");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Sign Up Failed: ${error.message}`);
      } else {
        toast.error("Sign Up Failed: An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      toast.success("Signed In! ✅");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Sign In Failed: ${error.message}`);
      } else {
        toast.error("Sign In Failed: An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <Container>
      {loading && <LoadingSpinner />}
      <TextWrapper>
        <h1>Samvaad</h1>
      </TextWrapper>
      <Wrapper>
        <FormMainWrapper>
          <FormWrapper>
            <RadioWrapper>
              <RadioLabel>
                <input
                  type="radio"
                  name="authType"
                  checked={!isSignUp}
                  onChange={() => {
                    resetForm();
                    setIsSignUp(false);
                  }}
                />
                Login
              </RadioLabel>

              <RadioLabel>
                <input
                  type="radio"
                  name="authType"
                  checked={isSignUp}
                  onChange={() => {
                    resetForm();
                    setIsSignUp(true);
                  }}
                />
                Sign Up
              </RadioLabel>
            </RadioWrapper>
            <FormGroup>
              {!isSignUp ? (
                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Label>Password</Label>
                  <PasswordInputWrapper>
                    <PasswordInput
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <TogglePasswordButton type="button" onClick={toggleShowPassword}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </TogglePasswordButton>
                  </PasswordInputWrapper>
                  <Button disabled={loading} onClick={handleEmailSignIn} style={{ marginTop: "30px" }}>Login</Button>
                </div>
              ) : (
                <div>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Label>Password</Label>
                  <PasswordInputWrapper>
                    <PasswordInput
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <TogglePasswordButton type="button" onClick={toggleShowPassword}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </TogglePasswordButton>
                  </PasswordInputWrapper>
                  <FormGroup>
                    <FileInputLabel>
                      Choose Profile Picture
                      <FileInput
                        type="file"
                        accept="image/*"
                        onChange={(e) => setProfilePicture(e.target.files?.[0] || null)}
                      />
                      {profilePicture && <FileInputIndicator className="indicator"><FaCheck /></FileInputIndicator>}
                    </FileInputLabel>
                  </FormGroup>
                  <Button disabled={loading} onClick={handleEmailSignUp}>Sign Up</Button>
                </div>
              )}
            </FormGroup>
          </FormWrapper>
        </FormMainWrapper>
      </Wrapper>
    </Container>
  );
}
