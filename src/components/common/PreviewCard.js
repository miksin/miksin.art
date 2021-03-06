import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import FlexBox from "@components/basic/FlexBox"
import FlexPad from "@components/basic/FlexPad"
import FixedAspectRatioBox from "@components/basic/FixedAspectRatioBox"
import Tag from "@components/common/Tag"
import { colors, sizes } from "@constants/home"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;

  &:hover {
    .cover {
      transition: transform 0.25s ease-out;
      transform: translateY(0%);
    }
  }
`

const Card = styled(FlexBox)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 8px;
  background: #FFF;
  border-radius: 3px;
  box-shadow: 1px 1px 7px 0px rgba(0, 0, 0, .3);
  overflow: hidden;
`

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ThumbnailAlt = styled(FlexBox)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: ${props => props.size}px;
  color: ${props=> props.color};
  background: linear-gradient(45deg, ${props => props.bgColors[0]}, ${props => props.bgColors[1]});
`

const Content = styled(FlexBox)`
  padding: 0 8px;
  flex-grow: 1;
  width: 100%;
`

const Title = styled.h4`
  margin: 8px 0;
  word-break: break-all;
`

const Excerpt = styled.p`
  word-break: break-all;
`

const DateInspector = styled.h6`
  margin: 8px 0;
`

const Footer = styled(FlexBox)`
  width: 100%;
  border-width: 1px;
  border-color: ${colors.lightGrey};
  border-top-style: solid;
`

const Cover = styled(FlexBox)`
  position: absolute;
  padding: 12px;
  width: 100%;
  height: 100%;
  background-color: ${colors.lightBlue};
  color: ${colors.white};
  transform: translateY(-100%);
`

const TagList = styled(FlexBox)`
  overflow: hidden;
  width: 100%;
`

const PreviewCard = ({
  title,
  thumbnailSrc,
  thumbnailAlt,
  date,
  excerpt,
  tags,
}) => {
  return (
    <Wrapper>
      <Card column center>
        <FixedAspectRatioBox ratio={210 / 297}>
          {
            thumbnailSrc ? <Thumbnail
              src={thumbnailSrc}
              alt={thumbnailAlt}
            /> :
            <ThumbnailAlt center
              size={sizes.altTextSize}
              color={colors.white}
              bgColors={[colors.indigo, colors.lightBlue]}
            >
              {thumbnailAlt}
            </ThumbnailAlt>
          }
        </FixedAspectRatioBox>
        <Content column center>
          <TagList center className="mg-t-10">
            {tags.slice(0, 3).map(tag => (
              <Tag key={tag} text={tag} className="mg-lr-2" small />
            ))}
          </TagList>
          <Title>{`${title}`.slice(0, 50)}</Title>
          <Excerpt>{`${excerpt}`.slice(0, 100)} ...</Excerpt>
          <FlexPad />
          <Footer>
            <DateInspector>{date}</DateInspector>
          </Footer>
        </Content>
        <Cover className="cover" center column>
          <h3>{title}</h3>
        </Cover>
      </Card>
    </Wrapper>
  )
}

PreviewCard.propTypes = {
  title: PropTypes.string,
  thumbnailSrc: PropTypes.string,
  thumbnailAlt: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

PreviewCard.defaultProps = {
  title: 'Title',
  thumbnailAlt: 'thumbnail',
  date: 'APRIL 25, 2019',
  excerpt: 'Lorem ipsum dolor sit amet, conctetur ping elit. A archcto codi cumque dissimos dobus, dolorum eos expbo id iusto lorum',
  tags: [],
}

export default PreviewCard
