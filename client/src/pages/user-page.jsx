import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";

export const UserPage = ({ user, logOut }) => {
  if (user) {
    return (
      <Container maxWidth="sm">
        <h1>Hi {user.firstName}! 👋</h1>
        <p>Here are your ten most recent logins:</p>
        <List>
          {user.logins.map((login, index) => {
            if (index === 9) return;
            return (
              <ListItem key={index}>
                <p>{login}</p>
              </ListItem>
            );
          })}
        </List>
        <Button onClick={logOut}>Log out</Button>
      </Container>
    );
  } else return <Button onClick={logOut}>Please log in</Button>;
};
