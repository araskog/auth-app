import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";

export const UserPage = ({ user, logOut }) => {
  if (user) {
    return (
      <Container maxWidth="sm">
        <h1>Hi {user.firstName}! 👋</h1>
        <List>
          <ListItem disablePadding>
            <p>Login 1</p>
          </ListItem>
        </List>
        <Button onClick={logOut}>Log out</Button>
      </Container>
    );
  } else return <Button onClick={logOut}>Please log in</Button>;
};
