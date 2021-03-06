/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import Heading from '../../../components/text/heading'
import Button, { Props as ButtonProps } from '../../../components/buttonsIndicators/button'
import { ComponentType } from 'react'

interface StyleProps {
  compact?: boolean
}

export const StyledWrapper = styled<{}, 'div'>('div')`
  position: absolute;
  text-align: center;
  font-family: ${p => p.theme.fontFamily.heading};
  background-image: linear-gradient(180deg, ${p => p.theme.palette.blurple500} 0%, #563195 100%);
  padding: 42px 42px 30px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 100%;
  overflow-y: auto;
`

export const StyledClose = styled<{}, 'div'>('div')`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  width: 11px;
  height: 11px;
  color: ${p => p.theme.palette.white};
`

export const StyledHeader = styled<StyleProps, 'div'>('div')`
  margin-bottom: ${p => p.compact ? '15px' : '42px'};
`

export const StyledBatIcon = styled<{}, 'div'>('div')`
  display: inline-block;
  vertical-align: middle;
  width: 50px;
  height: 50px;
`

export const StyledHeaderText = styled<{}, 'div'>('div')`
  width: calc(100% - 50px);
  vertical-align: middle;
  display: inline-block;
  padding-left: 22px;
`

export const StyledTitle = styled(Heading)`
  color: ${p => p.theme.palette.white};
  text-align: left;
  font-size: 22px;
  line-height: 24px;
  font-weight: 600;
`

export const StyledSubtitle = styled(Heading)`
  color: ${p => p.theme.palette.white};
  text-align: left;
  font-family: ${p => p.theme.fontFamily.body};
  font-size: 14px;
  line-height: 24px;
`

export const StyledListTitle = styled(Heading)`
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  line-height: 25px;
  padding-bottom: 4px;
  color: ${p => p.theme.palette.white};
`

export const StyledListItem = styled<StyleProps, 'div'>('div')`
  color: ${p => p.theme.palette.white};
  margin: ${p => p.compact ? '10px' : '15px'} 0;
`

export const StyledListIcon = styled<{}, 'div'>('div')`
  display: inline-block;
  width: 24px;
  height: 24px;
  vertical-align: middle;
`

export const StyledListItemText = styled<{}, 'div'>('div')`
  vertical-align: middle;
  text-align: left;
  font-family: ${p => p.theme.fontFamily.body};
  font-size: 15px;
  line-height: 20px;
  display: inline-block;
  width: calc(100% - 30px);
  padding-left: 12px;
`

export const StyledIDNotice = styled<StyleProps, 'div'>('div')`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: ${p => p.theme.palette.white};
  padding: ${p => p.compact ? '20px' : '30px'} 24px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.5433);
  margin: ${p => p.compact ? '25px' : '44px'} 0 0;
`

export const StyledButton = styled(Button as ComponentType<ButtonProps>)`
  padding: 11px 15px;
`

export const StyledFooter = styled<StyleProps, 'div'>('div')`
font-family: ${p => p.theme.fontFamily.body};
  font-size: 12px;
  color: ${p => p.theme.palette.white};
  margin-top: ${p => p.compact ? '28px' : '32px'};
`

export const StyledFooterIcon = styled<{}, 'div'>('div')`
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
`
