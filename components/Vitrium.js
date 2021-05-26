import { Content, CrossBar } from './styled/VitriumStyled'

export default function Vitrium () {
  return (
    <Content>
      <CrossBar className="d-flex jsutify-content-between">
        <div>
          <p>Onde eu atendo</p>
          <h4>Vitrium Centro Médico </h4>
          <p>SGAS 614 - L2 Sul - Sala 151  - (<a href="https://www.google.com.br/maps/place/Nutricionista+para+Gestantes+-+Nutri%C3%A7%C3%A3o+gestante/@-15.8357103,-47.9142477,18z/data=!4m5!3m4!1s0x0:0x214df389edb21b55!8m2!3d-15.8360827!4d-47.91323" target="_blank">Google maps</a>)</p>
        </div>
      </CrossBar>
    </Content>
  )
}