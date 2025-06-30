import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import Logo from '@/components/ui/Logo';

const Auth = () => {
  return <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo size="3xl" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Compucom LM</h1>
          <p className="text-muted-foreground">Votre compagnon de connaissances propulsé par l'IA</p>
        </div>
        <AuthForm />
      </div>
    </div>;
};

export default Auth;