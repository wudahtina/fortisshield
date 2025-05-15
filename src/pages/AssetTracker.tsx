import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Shield, MapPin, Clock, User, AlertTriangle, CheckCircle, Truck, Lock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type Certificate = Database['public']['Tables']['certificates']['Row'];

const AssetTracker = () => {
  const [assetId, setAssetId] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);

  const { data: certificate, isLoading, error } = useQuery<Certificate>({
    queryKey: ['certificate', assetId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .eq('asset_code', assetId)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: searchTriggered && !!assetId,
  });

  const handleTrackAsset = () => {
    if (!assetId.trim()) {
      return;
    }
    setSearchTriggered(true);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "In vault":
        return <Lock className="h-5 w-5 text-green-600" />;
      case "In Transit":
        return <Truck className="h-5 w-5 text-blue-600" />;
      case "Delivered":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <PageHeader 
        title="Secure Asset Tracker" 
        subtitle="Track your high-value assets in real-time with bank-level security"
      />

      <div className="max-w-3xl mx-auto mt-8">
        <Card className="border-2 border-navy-200 shadow-lg">
          <CardHeader className="bg-navy-50">
            <CardTitle className="flex items-center text-navy-800">
              <Shield className="mr-2 h-6 w-6 text-gold-500" /> 
              Asset Tracking Portal
            </CardTitle>
            <CardDescription>
              Enter your unique Asset Reference ID to track your secure assets
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="e.g., ASSET-*****-*****-****"
                  value={assetId}
                  onChange={(e) => setAssetId(e.target.value)}
                  className="border-navy-300"
                />
              </div>
              <Button 
                onClick={handleTrackAsset} 
                disabled={isLoading}
                className="bg-navy-800 hover:bg-navy-900"
              >
                {isLoading ? "Searching..." : "Track Asset"}
              </Button>
            </div>
            
            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
                An error occurred while fetching the asset data. Please try again.
              </div>
            )}

            {certificate && (
              <div className="mt-6 space-y-6">
                <div className="border border-navy-200 rounded-lg overflow-hidden">
                  <div className="bg-navy-700 text-white p-4 flex justify-between items-center">
                    <h3 className="font-semibold">Asset ID: {certificate.asset_code}</h3>
                    <div className="flex items-center bg-navy-600 px-3 py-1 rounded">
                      {getStatusIcon(certificate.current_asset_status)}
                      <span className="ml-2 text-sm">{certificate.current_asset_status}</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 p-4 bg-white">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-navy-600 mt-1 mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Vault Code</p>
                          <p className="font-medium">{certificate.vault_code}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <User className="h-5 w-5 text-navy-600 mt-1 mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Assigned Custodian</p>
                          <p className="font-medium">{certificate.assigned_custodian}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-navy-600 mt-1 mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Last Verification</p>
                          <p className="font-medium">{formatDate(certificate.last_verification_date)}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-navy-600 mt-1 mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Next Verification</p>
                          <p className="font-medium">{formatDate(certificate.next_verification_date)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-navy-200 rounded-lg overflow-hidden p-4">
                  <h3 className="text-lg font-semibold text-navy-800 mb-4">Certificate Details</h3>
                  <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Transaction Code</p>
                      <p className="font-medium">{certificate.transaction_code}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Security Code</p>
                      <p className="font-medium">{certificate.security_code}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Depositor Name</p>
                      <p className="font-medium">{certificate.depositor_name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Depositor Nationality</p>
                      <p className="font-medium">{certificate.depositor_nationality}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Next of Kin</p>
                      <p className="font-medium">{certificate.next_of_kin_name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Next of Kin Nationality</p>
                      <p className="font-medium">{certificate.next_of_kin_nationality}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date of Deposit</p>
                      <p className="font-medium">{formatDate(certificate.date_of_deposit)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Purpose of Deposit</p>
                      <p className="font-medium">{certificate.purpose_of_deposit}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Security Charges</p>
                      <p className="font-medium">{certificate.security_charges_per_week}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Consignment Package</p>
                      <p className="font-medium">{certificate.consignment_package}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Consignment Content</p>
                      <p className="font-medium">{certificate.consignment_content}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Document Expiry</p>
                      <p className="font-medium">{formatDate(certificate.document_expiry)}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="bg-navy-50 text-xs text-navy-600 flex flex-col items-start">
            <p className="mb-1">
              <Lock className="inline h-3 w-3 mr-1" />
              All data is protected with 256-bit encryption and transmitted via secure SSL connection.
            </p>
            <p>
              For support, contact our secure asset team at secure-assets@fortisshield.com or +44 20 7946 0473.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AssetTracker;
