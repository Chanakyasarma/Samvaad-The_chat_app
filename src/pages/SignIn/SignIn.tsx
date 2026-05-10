import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { firebaseAuth, firebaseFirestore, firebaseStorage } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { useUserStore } from "../../hooks";
import toast from "react-hot-toast";
import LoadingSpinner from "./Spinner";
import { FaEye, FaEyeSlash, FaCheck, FaInfoCircle, FaCamera } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: #0a0f1e;
`;

const LeftPanel = styled.div`
  flex: 1;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  background: linear-gradient(135deg, #0a0f1e 0%, #1a2540 50%, #0d1a35 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(79,142,247,0.15) 0%, transparent 70%);
    top: -100px;
    left: -100px;
    pointer-events: none;
  }
  &::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%);
    bottom: -80px;
    right: -80px;
    pointer-events: none;
  }

  @media (min-width: 900px) {
    display: flex;
  }
`;

const BrandMark = styled.div`
  animation: ${float} 4s ease-in-out infinite;
  margin-bottom: 40px;
`;

const BrandLogo = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 28px;
  background: linear-gradient(135deg, #4f8ef7, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  box-shadow: 0 20px 60px rgba(79,142,247,0.4);
  margin: 0 auto 24px;
`;

const BrandTitle = styled.h1`
  font-family: 'Sora', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, #94a3b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
  text-align: center;
`;

const BrandTagline = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  max-width: 320px;
  line-height: 1.7;
`;

const FeatureList = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  color: #94a3b8;
  font-size: 0.95rem;
  animation: ${fadeIn} 0.6s ease both;

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
`;

const FeatureDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4f8ef7, #8b5cf6);
  flex-shrink: 0;
`;

const RightPanel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: #0a0f1e;
  overflow-y: auto;

  @media (min-width: 900px) {
    width: 480px;
    background: #0d1320;
    border-left: 1px solid #1e293b;
  }
`;

const FormCard = styled.div`
  width: 100%;
  max-width: 400px;
  animation: ${fadeIn} 0.5s ease;
`;

const MobileBrand = styled.div`
  text-align: center;
  margin-bottom: 32px;

  @media (min-width: 900px) {
    display: none;
  }
`;

const MobileLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 18px;
  background: linear-gradient(135deg, #4f8ef7, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  margin: 0 auto 12px;
  box-shadow: 0 10px 30px rgba(79,142,247,0.3);
`;

const FormTitle = styled.h2`
  font-family: 'Sora', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 6px;
`;

const FormSubtitle = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 32px;
`;

const TabBar = styled.div`
  display: flex;
  background: #1e293b;
  border-radius: 12px;
  padding: 4px;
  margin-bottom: 28px;
`;

const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  border: none;
  padding: 10px;
  border-radius: 9px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.25s ease;
  cursor: pointer;
  background: ${({ active }) => active ? '#4f8ef7' : 'transparent'};
  color: ${({ active }) => active ? '#fff' : '#64748b'};
  box-shadow: ${({ active }) => active ? '0 4px 15px rgba(79,142,247,0.35)' : 'none'};
`;

const FormGroup = styled.div`
  margin-bottom: 18px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #94a3b8;
  margin-bottom: 7px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 13px 16px;
  font-size: 0.95rem;
  background: #1e293b;
  border: 1.5px solid #334155;
  border-radius: 12px;
  color: #e2e8f0;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: #475569;
  }

  &:focus {
    border-color: #4f8ef7;
    background: #1a2540;
    box-shadow: 0 0 0 3px rgba(79,142,247,0.15);
  }
`;

const PasswordInput = styled(Input)`
  padding-right: 46px;
`;

const EyeButton = styled.button`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #475569;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover { color: #94a3b8; }
`;

const AvatarUpload = styled.label`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  background: #1e293b;
  border: 1.5px dashed #334155;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #4f8ef7;
    background: #1a2540;
  }
`;

const AvatarPreview = styled.div<{ hasFile: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ hasFile }) => hasFile ? 'linear-gradient(135deg, #4f8ef7, #8b5cf6)' : '#334155'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ hasFile }) => hasFile ? '#fff' : '#64748b'};
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const AvatarText = styled.div`
  flex: 1;
`;

const AvatarLabel = styled.p`
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 500;
`;

const AvatarSub = styled.p`
  color: #475569;
  font-size: 0.78rem;
  margin-top: 2px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'DM Sans', sans-serif;
  background: linear-gradient(135deg, #4f8ef7, #6d6cf7);
  background-size: 200% auto;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 8px;
  transition: all 0.25s ease;
  box-shadow: 0 8px 25px rgba(79,142,247,0.35);
  letter-spacing: 0.02em;

  &:hover:not(:disabled) {
    background-position: right center;
    box-shadow: 0 12px 35px rgba(79,142,247,0.5);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const DemoButton = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 11px;
  background: transparent;
  border: 1.5px solid #334155;
  border-radius: 12px;
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #475569;
    color: #94a3b8;
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  animation: ${fadeIn} 0.2s ease;
`;

const PopupCard = styled.div`
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 20px;
  padding: 32px;
  width: 340px;
  box-shadow: 0 25px 50px rgba(0,0,0,0.5);

  h2 {
    font-family: 'Sora', sans-serif;
    font-size: 1.3rem;
    color: #f1f5f9;
    margin-bottom: 16px;
  }
`;

const DemoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #334155;
  font-size: 0.9rem;

  &:last-of-type { border-bottom: none; }

  span:first-child { color: #64748b; }
  span:last-child { color: #94a3b8; font-weight: 500; font-family: monospace; }
`;

const CloseBtn = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 11px;
  background: #334155;
  border: none;
  border-radius: 10px;
  color: #94a3b8;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.2s;

  &:hover { background: #475569; }
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
  const [showDemoPopup, setShowDemoPopup] = useState(false);

  const resetForm = () => {
    setName(""); setEmail(""); setPassword(""); setProfilePicture(null);
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
        uid: user.uid, email: user.email, displayName: name, photoURL,
      });
      toast.success("Welcome to Samvaad! ✅");
    } catch (error: unknown) {
      toast.error(error instanceof Error ? `Sign Up Failed: ${error.message}` : "Sign Up Failed");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      toast.success("Welcome back! ✅");
    } catch (error: unknown) {
      toast.error(error instanceof Error ? `Sign In Failed: ${error.message}` : "Sign In Failed");
    } finally {
      setLoading(false);
    }
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <Page>
      {loading && <LoadingSpinner />}

      <LeftPanel>
        <BrandMark>
          <BrandLogo>💬</BrandLogo>
          <BrandTitle>Samvaad</BrandTitle>
          <BrandTagline>Real-time conversations, beautifully crafted for the web.</BrandTagline>
        </BrandMark>
        <FeatureList>
          {["Real-time messaging with Firebase", "Group chats with admin controls", "Translate to 10+ Indian languages", "File, image & emoji support"].map((f, i) => (
            <Feature key={i}><FeatureDot />{f}</Feature>
          ))}
        </FeatureList>
      </LeftPanel>

      <RightPanel>
        <FormCard>
          <MobileBrand>
            <MobileLogo>💬</MobileLogo>
            <BrandTitle style={{ fontSize: '1.8rem' }}>Samvaad</BrandTitle>
          </MobileBrand>

          <FormTitle>{isSignUp ? "Create account" : "Welcome back"}</FormTitle>
          <FormSubtitle>{isSignUp ? "Join Samvaad and start chatting" : "Sign in to continue to Samvaad"}</FormSubtitle>

          <TabBar>
            <Tab active={!isSignUp} onClick={() => { resetForm(); setIsSignUp(false); }}>Login</Tab>
            <Tab active={isSignUp} onClick={() => { resetForm(); setIsSignUp(true); }}>Sign Up</Tab>
          </TabBar>

          {!isSignUp ? (
            <div>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <InputWrapper>
                  <PasswordInput type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
                  <EyeButton type="button" onClick={() => setShowPassword(p => !p)}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </EyeButton>
                </InputWrapper>
              </FormGroup>
              <SubmitButton disabled={loading} onClick={handleEmailSignIn}>
                {loading ? "Signing in..." : "Sign In →"}
              </SubmitButton>
            </div>
          ) : (
            <div>
              <FormGroup>
                <Label>Full Name</Label>
                <Input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} required />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <InputWrapper>
                  <PasswordInput type={showPassword ? "text" : "password"} placeholder="Min. 6 characters" value={password} onChange={e => setPassword(e.target.value)} required />
                  <EyeButton type="button" onClick={() => setShowPassword(p => !p)}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </EyeButton>
                </InputWrapper>
              </FormGroup>
              <FormGroup>
                <Label>Profile Picture</Label>
                <AvatarUpload>
                  <AvatarPreview hasFile={!!profilePicture}>
                    {profilePicture ? <FaCheck /> : <FaCamera />}
                  </AvatarPreview>
                  <AvatarText>
                    <AvatarLabel>{profilePicture ? profilePicture.name : "Choose a photo"}</AvatarLabel>
                    <AvatarSub>{profilePicture ? "Photo selected" : "PNG, JPG up to 5MB"}</AvatarSub>
                  </AvatarText>
                  <HiddenInput type="file" accept="image/*" onChange={e => setProfilePicture(e.target.files?.[0] || null)} />
                </AvatarUpload>
              </FormGroup>
              <SubmitButton disabled={loading} onClick={handleEmailSignUp}>
                {loading ? "Creating account..." : "Create Account →"}
              </SubmitButton>
            </div>
          )}

          <DemoButton onClick={() => setShowDemoPopup(true)}>
            <FaInfoCircle /> Demo Credentials
          </DemoButton>
        </FormCard>
      </RightPanel>

      {showDemoPopup && (
        <PopupOverlay onClick={() => setShowDemoPopup(false)}>
          <PopupCard onClick={e => e.stopPropagation()}>
            <h2>Demo Credentials</h2>
            <DemoRow><span>Email</span><span>demo@example.com</span></DemoRow>
            <DemoRow><span>Password</span><span>demopassword</span></DemoRow>
            <CloseBtn onClick={() => setShowDemoPopup(false)}>Close</CloseBtn>
          </PopupCard>
        </PopupOverlay>
      )}
    </Page>
  );
}
