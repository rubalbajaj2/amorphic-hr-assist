import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, CheckCircle, Clock, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Document {
  id: string;
  name: string;
  type: string;
  uploadDate: string;
  status: "synced" | "syncing" | "error";
  size: string;
}

const mockDocuments: Document[] = [
  {
    id: "1",
    name: "Employee Handbook v3.pdf",
    type: "PDF",
    uploadDate: "2024-09-15",
    status: "synced",
    size: "2.4 MB",
  },
  {
    id: "2", 
    name: "UK Parental Leave Policy.docx",
    type: "DOCX",
    uploadDate: "2024-09-14",
    status: "synced",
    size: "1.2 MB",
  },
  {
    id: "3",
    name: "Remote Work Guidelines 2024.pdf",
    type: "PDF",
    uploadDate: "2024-09-12",
    status: "synced",
    size: "892 KB",
  },
  {
    id: "4",
    name: "Performance Review Process.pdf",
    type: "PDF",
    uploadDate: "2024-09-10",
    status: "syncing",
    size: "1.8 MB",
  },
];

const KnowledgeBase = () => {
  const [documents, setDocuments] = useState(mockDocuments);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleUpload = async () => {
    setIsUploading(true);
    
    // Simulate file upload
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newDoc: Document = {
      id: Date.now().toString(),
      name: "New HR Policy.pdf",
      type: "PDF", 
      uploadDate: new Date().toISOString().split('T')[0],
      status: "syncing",
      size: "1.5 MB",
    };

    setDocuments(prev => [newDoc, ...prev]);
    setIsUploading(false);

    toast({
      title: "Document uploaded",
      description: "Your document is being processed and will be available shortly.",
    });

    // Simulate sync completion
    setTimeout(() => {
      setDocuments(prev => 
        prev.map(doc => 
          doc.id === newDoc.id ? { ...doc, status: "synced" } : doc
        )
      );
    }, 3000);
  };

  const handleDelete = (id: string) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
    toast({
      title: "Document deleted", 
      description: "The document has been removed from the knowledge base.",
    });
  };

  const getStatusIcon = (status: Document["status"]) => {
    switch (status) {
      case "synced":
        return <CheckCircle className="h-4 w-4 text-blue-400" />;
      case "syncing":
        return <Clock className="h-4 w-4 text-blue-400 animate-pulse" />;
      case "error":
        return <CheckCircle className="h-4 w-4 text-blue-400" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: Document["status"]) => {
    const variants = {
      synced: "bg-success/20 text-success border-success/30",
      syncing: "bg-warning/20 text-warning border-warning/30",
      error: "bg-destructive/20 text-destructive border-destructive/30",
    };

    return (
      <Badge variant="outline" className={variants[status]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header Panel */}
      <div className="glass-card p-6 rounded-2xl relative">
        <div className="flex items-center justify-center relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-400 mb-3">
              Cloudwick | Amorphic
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Amorphic is a cloud orchestration platform that simplifies how IT, business, and data science teams manage advanced AWS analytics and machine learning. By seamlessly integrating over <strong>75+ AWS services</strong> with your existing data pipelines, it streamlines data operations and enhances usability.
            </p>
          </div>
          
          {/* AWS Logo - Panel Corner */}
          <div className="absolute" style={{ top: '-8px', right: '-8px' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
              alt="AWS Logo" 
              className="h-6 w-auto brightness-0 invert"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.innerHTML = '<div class="text-white font-bold text-xs">AWS</div>';
              }}
            />
          </div>
        </div>
      </div>

      <div className="fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-2">AI Knowledge Base</h1>
        <p className="text-muted-foreground">
          The Knowledge Base is your company's secure, single source of truth, containing your proprietary documents, product data, and internal expertise. Our models use <strong>Retrieval-Augmented Generation (RAG)</strong> to consult this trusted information, enabling them to deliver highly accurate, context-aware outputs and execute tasks based on your unique data.
        </p>
      </div>

      {/* Upload Section */}
      <div className="fade-in" style={{ animationDelay: "0.1s" }}>
        <Card className="glass-card p-6">
          <div className="flex items-center justify-end mb-4">
            <Button 
              onClick={handleUpload}
              disabled={isUploading}
              className="bg-blue-400 hover:bg-blue-500 text-white px-6 h-12"
            >
              <Upload className="h-4 w-4 mr-2" />
              {isUploading ? "Uploading..." : "Upload Document"}
            </Button>
          </div>
          
          <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
            <FileText className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <p className="text-muted-foreground mb-2">
              Drag and drop files here, or click the upload button
            </p>
            <p className="text-sm text-muted-foreground">
              Supports PDF, DOC, DOCX files up to 10MB
            </p>
          </div>
        </Card>
      </div>

      {/* Documents List */}
      <div className="fade-in" style={{ animationDelay: "0.2s" }}>
        <Card className="glass-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Document Library</h3>
          
          <div className="space-y-3">
            {documents.map((doc) => (
              <div 
                key={doc.id}
                className="flex items-center justify-between p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-surface flex items-center justify-center">
                    <FileText className="h-5 w-5 text-blue-400" />
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground">{doc.name}</h4>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{doc.type}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span>{new Date(doc.uploadDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {getStatusIcon(doc.status)}
                  {getStatusBadge(doc.status)}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(doc.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4 text-blue-400" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {documents.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No documents uploaded yet</p>
              <p className="text-sm">Upload your first document to get started</p>
            </div>
          )}
        </Card>
      </div>

      {/* Knowledge Base Stats */}
      <div className="fade-in" style={{ animationDelay: "0.3s" }}>
        <div className="grid grid-cols-3 gap-4">
          <Card className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{documents.length}</div>
            <div className="text-sm text-muted-foreground">Total Documents</div>
          </Card>
          
          <Card className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-success">
              {documents.filter(d => d.status === "synced").length}
            </div>
            <div className="text-sm text-muted-foreground">Synced</div>
          </Card>
          
          <Card className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-warning">
              {documents.filter(d => d.status === "syncing").length}
            </div>
            <div className="text-sm text-muted-foreground">Processing</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;