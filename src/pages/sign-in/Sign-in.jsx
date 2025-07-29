import './signIn.scss';

export default function SignIn() {
  return (
    <div>
      <h1>FinTrack</h1>
        <input type="email" placeholder="Email address" required/>
        <a href="#">Forgotten your Email?</a>
        <button onClick={this}>Next</button>
        <div><span></span><span>OR</span><span></span></div>
        <button>Sign Up</button>
    </div>
  );
}
