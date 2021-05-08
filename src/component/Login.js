import styled from "styled-components";
const Login=(props)=> {
    return (
        <Container>
        <Content>
        <CTA>
        <CTALogoOne src="/images/cta-logo-one.png"/>
        <SignUp>Get it all there</SignUp>
        <Description>Therkesdfklszfmgarsdmvncxmnvkdsmn,,
        jdjfndsjbsm,mdlaskds,nvndvc vmncnvmvnc</Description>
        <CTALogoTwo src="/images/cta-logo-two.png"/>
        </CTA>
        <BgImage/>
        </Content></Container>
    )
}

export default Login;


const Container=styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;`


const Content=styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 70px;
`;

const BgImage=styled.div`
height:100%;
background-position:top center;
background-size:cover;
background-repeat:no-repeat;
background-image:url("/images/login-background.jpg");
position:absolute;
top:0;
right:0;
left:0;
z-index:-1;
`

const CTA=styled.image`
    margin-bottom:2vw;
    max-width:650px;
    flex-wrap:wrap;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin-right:auto;
    margin-left:auto;
    transition-timing-function:ease-out;
    transition:opacity 0.2s;
    width:100%;
`

const CTALogoOne=styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:flex;
width:100%;`

const SignUp=styled.button`
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding:16.5px 0;
border:1px solid transparent;
border-radius:4px;

&:hover{
    background-color:#0483ee;
}`;


const Description=styled.p`
color:hsla(0,0%,95.3s,1);
font-size:11px;
margin:0 0 24px 0;
line-height:1.5;
letter-spacing:1.5px;
`;

const CTALogoTwo=styled.img`
    max-width:600px;
    margin-bottom:20px;
    display:inline-block;
    vertical-align:bottom;
    width:100;
    `