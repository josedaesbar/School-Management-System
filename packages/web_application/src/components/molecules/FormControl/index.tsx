import * as React from 'react';
import * as S from './style';

import Text from '../../atoms/Text';
import Icon, { IconPropsType } from '../../atoms/Icon/Icon';
import Input, { InputPropsType } from '../../atoms/Input';

import { TColor, TSize } from '../../../styles/text';
import { Fonts } from '../../../styles/font';

interface FormControlPropsType extends IconPropsType, InputPropsType {
  labelText: string;
}

const FormControl: React.FC<FormControlPropsType> = ({ icon, type, labelText }) => (
  <S.Container>
    <S.ContainerText>
      <Text color={TColor.GRAY} weight={Fonts.BOLD} size={TSize.NORMAL}>
        {labelText}
      </Text>
    </S.ContainerText>
    <S.ContainerInputForm>
      <S.ContainerIcon>
        <Icon icon={icon} />
      </S.ContainerIcon>
      <S.ContainerInput>
        <Input type={type} />
      </S.ContainerInput>
    </S.ContainerInputForm>
  </S.Container>
);

export default FormControl;
