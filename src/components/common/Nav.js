import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Menu } from "react-feather"

import NavMenu from "@components/common/NavMenu"
import IconButton from "@components/common/IconButton"
import FlexBox from "@components/basic/FlexBox"
import FlexPad from "@components/basic/FlexPad"

import { colors, sizes, devices } from "@constants/common"

const Fixed = styled(FlexBox)`
  position: fixed;
  width: 100%;
  height: ${sizes.nav}px;
  background-color: ${props => props.color};
  z-index: 20;

  @media screen and (max-width: ${devices.mobile}px) {
    height: ${sizes.navMobile}px;
  }
`

const Wrapper = styled(FlexBox)`
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: ${devices.tablet}px;
`

const MenuButton = styled(IconButton)`
  margin: auto 8px;

  width: ${sizes.navButton}px;
  height: ${sizes.navButton}px;

  @media screen and (max-width: ${devices.mobile}px) {
    width: ${sizes.navButtonMobile}px;
    height: ${sizes.navButtonMobile}px;
  }
`
const Nav = ({
  links,
  bgColor,
  iconColor,
}) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <Fixed center color={bgColor}>
        <Wrapper center>
          <FlexPad />
          <MenuButton
            color="transparent"
            onClick={() => setIsActive(true)}
          >
            <Menu
              size="100%"
              color={iconColor}
            />
          </MenuButton>
        </Wrapper>
      </Fixed>
      <NavMenu
        isActive={isActive}
        links={links}
        onBlur={() => setIsActive(false)}
      />
    </>
  )
}

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })),
  bgColor: PropTypes.string,
  iconColor: PropTypes.string,
}

Nav.defaultProps = {
  links: [],
  bgColor: 'rgba(255, 255, 255, .7)',
  iconColor: colors.lightBlue,
}

export default Nav
