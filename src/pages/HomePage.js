import BrainIdeaComponent from "../components/BrainIdeaComponent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

function HomePage() {
  return (
    <>
      <Container>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              style={{ fontFamily: "'Luckiest Guy', cursive" }}
            >
              Welcome, Adventurer!
            </Typography>
            <BrainIdeaComponent height={425} width={350} />
            <Typography variant="body1">
              Cardigan kickstarter single-origin coffee chambray salvia
              taxidermy before they sold out meggings readymade post-ironic
              tacos. Hella mumblecore kombucha, forage food truck vape heirloom
              copper mug cliche fashion axe readymade direct trade. Brooklyn
              street art adaptogen pug neutra austin try-hard umami coloring
              book. Beard vape gochujang roof party, cold-pressed unicorn twee
              normcore butcher air plant chillwave polaroid waistcoat art party.
              Food truck single-origin coffee church-key, tumblr godard affogato
              seitan. Brunch coloring book thundercats lyft, try-hard crucifix
              swag shaman cloud bread.
            </Typography>
          </div>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
