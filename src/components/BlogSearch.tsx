import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface BlogSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export function BlogSearch({ onSearch, placeholder = "Search articles...", className = "" }: BlogSearchProps) {
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
    setIsExpanded(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center">
        {/* Mobile: Expandable Search */}
        <div className="md:hidden">
          {!isExpanded ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(true)}
              className="h-10 w-10 rounded-full hover:bg-primary/10 transition-all duration-300"
            >
              <Search className="h-5 w-5" />
            </Button>
          ) : (
            <div className="flex items-center gap-2 animate-fade-in">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={placeholder}
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-9 pr-9 w-64 bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/50 transition-all duration-300"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={clearSearch}
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Desktop: Always Visible Search */}
        <div className="hidden md:block relative group">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input
              type="text"
              placeholder={placeholder}
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-9 pr-9 w-80 bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:bg-background transition-all duration-300 hover:border-primary/30"
            />
            {query && (
              <Button
                variant="ghost"
                size="icon"
                onClick={clearSearch}
                className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 opacity-0 group-hover:opacity-100 hover:bg-destructive/10 hover:text-destructive transition-all duration-200"
              >
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>
          
          {/* Search Suggestions Placeholder */}
          {query && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 z-50">
              <div className="p-3 text-sm text-muted-foreground">
                Search suggestions will appear here
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}