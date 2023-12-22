# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "ch3nyang-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["ch3nyang"]
  spec.email         = ["dtchenyang@gmail.com"]

  spec.summary       = "theme for ch3nyang"
  # spec.homepage      = "None."
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
