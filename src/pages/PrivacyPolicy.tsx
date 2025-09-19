import React from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ManageCookiesButton } from '@/components/ManageCookiesButton';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Politique de Confidentialité et Cookies | Casakine"
        description="Politique de confidentialité et de cookies de Casakine. Conforme aux réglementations CNDP marocaines. Découvrez comment nous protégeons vos données personnelles."
        keywords="politique confidentialité, cookies, CNDP Maroc, protection données, vie privée"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Card className="mb-8">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <Badge className="text-sm px-3 py-1">
                  Conforme CNDP
                </Badge>
              </div>
              <CardTitle className="text-3xl font-bold text-primary">
                Politique de Confidentialité & Cookies
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </CardHeader>
          </Card>

          <div className="space-y-6">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">1. Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Nawal El Ghorfi - Casakine ("nous", "notre", "nos") s'engage à protéger et respecter votre vie privée. 
                  Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles 
                  conformément aux réglementations de la Commission Nationale de contrôle de la protection des Données à 
                  caractère Personnel (CNDP) du Maroc.
                </p>
                <p>
                  Cette politique s'applique à notre site web <strong>casakine.com</strong> et à tous les services que nous proposons.
                </p>
              </CardContent>
            </Card>

            {/* Data Controller */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">2. Responsable du Traitement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span><strong>Adresse :</strong> 19 Rue Masmouda, Casablanca 20210, Maroc</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span><strong>Téléphone :</strong> +212 661 677 096</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span><strong>Email :</strong> info@casakine.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">3. Politique des Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold">Qu'est-ce qu'un cookie ?</h3>
                <p>
                  Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez notre site web. 
                  Les cookies nous aident à améliorer votre expérience de navigation et à comprendre comment notre site est utilisé.
                </p>

                <h3 className="font-semibold">Types de cookies que nous utilisons :</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium">Cookies Essentiels</h4>
                    <p className="text-sm text-muted-foreground">
                      Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium">Cookies d'Analyse</h4>
                    <p className="text-sm text-muted-foreground">
                      Nous aident à comprendre comment les visiteurs interagissent avec notre site (Google Analytics).
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium">Cookies Marketing</h4>
                    <p className="text-sm text-muted-foreground">
                      Utilisés pour le suivi publicitaire et les réseaux sociaux.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium">Cookies de Préférences</h4>
                    <p className="text-sm text-muted-foreground">
                      Mémorisent vos choix (langue, région) pour améliorer votre expérience.
                    </p>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Gérer vos préférences de cookies</h4>
                  <p className="text-sm mb-3">
                    Vous pouvez modifier vos préférences de cookies à tout moment en cliquant sur le bouton ci-dessous :
                  </p>
                  <ManageCookiesButton />
                </div>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">4. Données que nous collectons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold">Informations collectées automatiquement :</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Adresse IP (anonymisée)</li>
                  <li>Type de navigateur et version</li>
                  <li>Pages visitées et temps passé sur le site</li>
                  <li>Référent (site d'où vous venez)</li>
                  <li>Données de géolocalisation approximative (pays/ville)</li>
                </ul>

                <h3 className="font-semibold">Informations que vous nous fournissez :</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Nom et prénom (formulaires de contact)</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Messages et demandes d'information</li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">5. Vos Droits (CNDP)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Conformément à la loi marocaine sur la protection des données personnelles, vous disposez des droits suivants :</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Droit d'accès</h4>
                    <p className="text-sm text-muted-foreground">Connaître les données que nous détenons sur vous</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Droit de rectification</h4>
                    <p className="text-sm text-muted-foreground">Corriger des données inexactes</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Droit à l'effacement</h4>
                    <p className="text-sm text-muted-foreground">Demander la suppression de vos données</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Droit d'opposition</h4>
                    <p className="text-sm text-muted-foreground">Vous opposer au traitement de vos données</p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                    Comment exercer vos droits
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Pour exercer vos droits, contactez-nous à <strong>info@casakine.com</strong> ou 
                    au <strong>+212 661 677 096</strong>. Nous répondons dans un délai de 30 jours maximum.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">6. Sécurité des Données</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger 
                  vos données personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, 
                  la divulgation, l'altération ou la destruction.
                </p>
                
                <h3 className="font-semibold">Mesures de sécurité :</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Chiffrement SSL/TLS pour toutes les communications</li>
                  <li>Stockage sécurisé des données</li>
                  <li>Accès restreint aux données personnelles</li>
                  <li>Surveillance et journalisation des accès</li>
                  <li>Mise à jour régulière des systèmes de sécurité</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">7. Conservation des Données</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span><strong>Données de contact :</strong> 3 ans après le dernier contact</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span><strong>Cookies analytiques :</strong> 24 mois maximum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span><strong>Logs techniques :</strong> 12 mois</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third Party Services */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">8. Services Tiers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Notre site utilise les services tiers suivants :</p>
                
                <div className="space-y-3">
                  <div className="border rounded-lg p-3">
                    <h4 className="font-medium">Google Analytics</h4>
                    <p className="text-sm text-muted-foreground">
                      Analyse du trafic web. Les données sont anonymisées et nous avons signé un accord de traitement des données avec Google.
                    </p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-medium">Google Maps</h4>
                    <p className="text-sm text-muted-foreground">
                      Affichage de notre localisation. Consulter la politique de confidentialité de Google.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact DPO */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">9. Contact et Réclamations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Délégué à la Protection des Données (DPO)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>dpo@casakine.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>+212 661 677 096</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm">
                  <strong>Réclamations auprès de la CNDP :</strong> Si vous estimez que vos droits ne sont pas respectés, 
                  vous pouvez déposer une réclamation auprès de la Commission Nationale de contrôle de la protection 
                  des Données à caractère Personnel (CNDP) du Maroc.
                </p>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">10. Modifications de cette Politique</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                  Les modifications entreront en vigueur dès leur publication sur cette page. 
                  Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques.
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-8" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Nawal El Ghorfi - Casakine. Tous droits réservés.</p>
            <p className="mt-2">Conforme aux réglementations CNDP du Maroc</p>
          </div>
        </div>
      </div>
    </>
  );
}