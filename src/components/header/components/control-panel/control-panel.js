import styled from "styled-components";
import { Icon } from '../../../../components'

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  font-size: 18px;
  width: 100px;
  height: 32px;
`
const ControlPanelContainer = ({ className }) => {
  return (
    <div className={className}>
      <RightAligned>
        <Button>Войти</Button>
      </RightAligned>
      <RightAligned>
        <Icon id="backward" margin="10px 0 0 0" />
        <Icon id="file-text-o" margin="10px 0 0 17px" />
        <Icon id="users" margin="10px 0 0 20px" />
      </RightAligned>
    </div>
  )
}

export const ControlPanel = styled(ControlPanelContainer)`
  
`;