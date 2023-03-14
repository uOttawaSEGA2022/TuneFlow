import { Box, styled } from '@mui/material';
import { Span } from './Typography';
import './font.css';

const BrandRoot = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '40px',
  paddingBottom: '30px',
  fontFamily: 'Fahkwang',
  fontWeight: '600',
}));

const StyledSpan = styled(Span)(({ mode }) => ({
  fontSize: 30,
  alignItems: 'center',
}));

const Brand = ({ children }) => {

  return (
    <BrandRoot>
      <Box display="flex" alignItems="center">
        <StyledSpan>
          TuneFlow
        </StyledSpan>
      </Box>

    </BrandRoot>
  );
};

export default Brand;
