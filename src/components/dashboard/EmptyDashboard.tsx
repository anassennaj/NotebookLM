import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, FileText, Globe, Video, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useNotebooks } from '@/hooks/useNotebooks';

const EmptyDashboard = () => {
  const navigate = useNavigate();
  const {
    createNotebook,
    isCreating
  } = useNotebooks();
  
  const handleCreateNotebook = () => {
    console.log('Create notebook button clicked');
    console.log('isCreating:', isCreating);
    createNotebook({
      title: 'Carnet sans titre',
      description: ''
    }, {
      onSuccess: data => {
        console.log('Navigating to notebook:', data.id);
        navigate(`/notebook/${data.id}`);
      },
      onError: error => {
        console.error('Failed to create notebook:', error);
      }
    });
  };
  
  return <div className="text-center py-16">
      <div className="mb-12">
        <h2 className="text-3xl font-medium text-foreground mb-4">Créez votre premier carnet</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Compucom LM est un assistant de recherche et de rédaction propulsé par l'IA qui fonctionne mieux avec les sources que vous téléchargez</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <div className="bg-card rounded-lg border border-border p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-medium text-card-foreground mb-2">PDFs</h3>
          <p className="text-muted-foreground">Téléchargez des articles de recherche, rapports et documents</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-6 text-center">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-lg font-medium text-card-foreground mb-2">Sites Web</h3>
          <p className="text-muted-foreground">Ajoutez des pages web et des articles en ligne comme sources</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <Video className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-lg font-medium text-card-foreground mb-2">Audio</h3>
          <p className="text-muted-foreground">Incluez du contenu multimédia dans vos recherches</p>
        </div>
      </div>

      <Button onClick={handleCreateNotebook} size="lg" className="bg-[#0088c2] hover:bg-[#006a99]" disabled={isCreating}>
        <Upload className="h-5 w-5 mr-2" />
        {isCreating ? 'Création en cours...' : 'Créer un carnet'}
      </Button>
    </div>;
};

export default EmptyDashboard;