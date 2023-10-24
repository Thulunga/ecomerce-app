import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { dokhonaAuth } from "../../FirebaseCofig";

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() => dokhonaAuth.signOut()}
        title="Logout"
        style={undefined}
      >
        Logout
      </Button>
    </Background>
  );
}//printf("hello World!")
