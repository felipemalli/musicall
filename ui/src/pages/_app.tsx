import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useState } from 'react';

import { AuthProvider } from '../context/AuthProvider'
import { ProtectedLayout } from '../components/ProtectedLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ProtectedLayout pageProtected={pageProps.protected}>
        <Component {...pageProps} />
      </ProtectedLayout>
    </AuthProvider>
  )
}

export default MyApp
