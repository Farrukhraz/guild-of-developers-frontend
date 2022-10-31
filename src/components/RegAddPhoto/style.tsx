import styled from 'styled-components';

export const Section = styled.section`
  background-color: var(--color-white);
`;

export const Title = styled.h1`
  font-size: var(--fs-600);
  font-weight: var(--fw-700);
  line-height: var(--line-height-600);

  text-align: center;
  margin: 105px 0 39px;
`;

export const Wrapper = styled.form`
  position: relative;
  max-width: 792px;
  padding: 64px 100px;
  margin: 0 auto 128px;
  background-color: var(--color-white-2);
  border-radius: 20px;
`;

export const SubTitle = styled.h2`
  font-size: var(--fs-600);
  font-weight: var(--fw-700);
  line-height: var(--line-height-600);

  text-align: center;
  margin: 0 0 32px;
`;

export const PhotoDiv = styled.div`
  display: flex;
  gap: 42px;
  margin-bottom: 64px;
`;

interface PhotoBoxProps {
  maxWidth: string;
  height: string;
  marginTop?: string;
  marginLeft?: string;
}

export const PhotoBox = styled.div<PhotoBoxProps>`
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  background-color: var(--color-white);
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  border: 4px solid var(--color-black);
  border-radius: 50%;
`;

export const PhotoImg = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  z-index: 1;
`;

interface ButtonsBoxProps {
  paddingBlock: string;
  gap: string;
}

export const ButtonsBox = styled.div<ButtonsBoxProps>`
  display: flex;
  gap: ${(props) => props.gap};
  padding-block: ${(props) => props.paddingBlock};
`;

export const FileInput = styled.input`
  display: none;
`;

interface BlackBtnProps {
  margin?: string;
  display?: string;
}

export const BlackBtn = styled.button<BlackBtnProps>`
  padding: 12px 42px;
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};

  background-color: var(--color-grey);
  border-radius: 25px;
  border: none;

  font-size: var(--fs-500);
  font-weight: var(--fw-700);
  line-height: var(--line-height-350);
  text-align: center;
  color: var(--color-white);
`;

export const LeftPartBox = styled.div``;

export const RightPartBox = styled.div``;

interface WhiteBtnProps {
  marginTop?: string;
}

export const WhiteBtn = styled.button<WhiteBtnProps>`
  max-width: 183px;
  width: 100%;
  padding: 9px 42px;
  margin-top: ${(props) => props.marginTop};

  background-color: var(--color-white);
  border-radius: 25px;
  border: 3px solid var(--color-black);

  font-size: var(--fs-500);
  font-weight: var(--fw-700);
  line-height: var(--line-height-350);
  text-align: center;
  color: var(--color-black);
`;

export const CoverDiv = styled.div`
  margin-bottom: 64px;
`;

export const CoverBox = styled.div`
  max-width: 588px;
  width: 100%;
  height: 185px;
  background-color: var(--color-grey-3);
  border-radius: 15px;
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 185px;
  border-radius: 15px;
`;

export const CropDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 80px;
  z-index: 100;
`;

export const CropControls = styled.div`
  position: absolute;
  width: 75%;
  display: flex;
  justify-content: space-between;
  padding: 16;
  z-index: 101;
`;
