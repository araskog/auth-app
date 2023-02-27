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
        <p>Your username is {user.email}.</p>
        <p>Here are your most recent logins:</p>
        <List>
          {loginList.map((login, index) => {
            if (index >= 10) return null;
            return (
              <ListItem key={index} sx={{ padding: "0 8px" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3114/3114812.png"
                  alt="clock"
                  style={{ height: "20px", marginRight: "10px" }}
                />
                <p>
                  {login.split("T")[0]} at {login.split("T")[1].split(".")[0]}
                </p>
              </ListItem>
            );
          })}
        </List>
        <Button onClick={logOut}>Log out</Button>
      </Container>
    );
  } else
    return (
      <Container maxWidth="sm">
        <h1>Access denied</h1>
        <Button onClick={logOut}>Please register to log in</Button>
      </Container>
    );
};
