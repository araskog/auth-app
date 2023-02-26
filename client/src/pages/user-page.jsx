import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";

export const UserPage = ({ user, logOut }) => {
  if (user) {
    const loginList = user.logins.reverse();
    loginList.sort((a, b) => Date.parse(b) - Date.parse(a));
    return (
      <Container maxWidth="sm">
        <h1>Hi {user.firstname}! 👋</h1>
        <p>Your email is {user.email}</p>
        <p>Here are your ten most recent logins:</p>
        <List>
          {loginList.map((login, index) => {
            if (index === 9) return;
            return (
              <ListItem key={index}>
                <p>
                  {login.split("T")[0]} at {login.split("T")[1]}
                </p>
              </ListItem>
            );
          })}
        </List>
        <Button onClick={logOut}>Log out</Button>
      </Container>
    );
  } else return <Button onClick={logOut}>Please register to log in</Button>;
};
