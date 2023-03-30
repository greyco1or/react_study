import React, { useState } from "react";
import Header from "./Header";

//State 관리
function Index(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const signIn = () => {
        setIsLoggedIn(true);
    }

    const signOut = () => {
        setIsLoggedOut(false);
    }

    return (
        <div>
            <Header isLoggedIn={isLoggedIn} onSignIn={signIn} onSignOut={signOut}/>
        </div>
    )
}

export default Index;