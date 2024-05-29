import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  test.skip('renders profile image', () => {
    render(<HomePage />);
    const profileImage = screen.getByAltText('Profile');
    expect(profileImage).toBeInTheDocument();
  });

  test.skip('renders Carol Wargo text', () => {
    render(<HomePage />);
    const carolWargoText = screen.getByText('Carol Wargo');
    expect(carolWargoText).toBeInTheDocument();
  });

  test.skip('renders Full Stack Developer | UX Designer text', () => {
    render(<HomePage />);
    const roleText = screen.getByText('Full Stack Developer | UX Designer.');
    expect(roleText).toBeInTheDocument();
  });

  test.skip('renders Download Resume button', () => {
    render(<HomePage />);
    const downloadButton = screen.getByText('Download Resume');
    expect(downloadButton).toBeInTheDocument();
  });

  test.skip('renders NEXT link', () => {
    render(<HomePage />);
    const nextLink = screen.getByText('NEXT');
    expect(nextLink).toBeInTheDocument();
  });
});
