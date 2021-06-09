import BrainIdeaComponent from "../components/BrainIdeaComponent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

function HomePage() {
  return (
    <>
      <div
        style={{
          display: "inline-block",
          position: "absolute",
          top: 0,
          zIndex: -50,
          width: "150vw",
          height: "200vh",
          verticalAlign: "middle",
          overflow: "hidden",
          paddingBottom: "100%",
        }}
      >
        <svg
          style={{
            display: "inline-block",
            position: "absolute",
            zIndex: 20,
            top: 0,
            left: 0,
            height: "200vh",
            width: "150vw",
          }}
          viewBox="0 0 500 500"
          preserveAspectRatio="xMinYMin meet"
        >
          <path
            d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
            style={{ stroke: "none", fill: "#FFF900" }}
          ></path>
        </svg>
      </div>
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
            <BrainIdeaComponent height={475} width={400} />
            <Typography variant="body1" style={{ fontSize: 24 }}>
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
